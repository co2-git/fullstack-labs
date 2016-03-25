'use strict';

import fs from 'fs';

class DB {
  static find (getter = {}) {
    return new Promise((pass, fail) => {
      let source = '';

      fs.createReadStream(this.name + '.json')

        .on('error', error => {
          if ( error.code === 'ENOENT' ) {
            const stream = fs.createWriteStream(this.name + '.json')
              .on('error', fail)
              .on('finish', () => {
                this.find(getter).then(pass, fail);
              });

            stream.write('[]');

            stream.end();
          }
          else {
            fail(error);
          }
        })

        .on('data', data => { source += data.toString() })

        .on('end', () => {
          let documents = JSON.parse(source);

          if ( Object.keys(getter).length ) {
            for ( const field in getter ) {
              documents = documents.filter(
                document => document[field] === getter[field]
              );
            }
          }

          pass(documents);
        });
    });
  }

  static insert (document = {}) {
    return new Promise((pass, fail) => {
      this.find()
        .then(documents => {

          if ( ! this.validate(document, documents) ) {
            return fail(new Error('Validation failed: ' + this.name));
          }

          documents.push(document);

          const stream = fs.createWriteStream(this.name + '.json')
            .on('error', fail)
            .on('finish', pass);

          stream.write(JSON.stringify(documents, null, 2));

          stream.end();
        })
        .catch(fail);
    });
  }
}

export default DB;
