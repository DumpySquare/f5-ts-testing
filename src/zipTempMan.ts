

const fast = require('@f5devcentral/f5-fast-core');
const fs = require('fs').promises;
const path = require('path');

const tempPath = './tempSetGood/hello.mst'
const tempPathBad = './tempSetBad/blah.mst'
console.log(tempPath);

// const helloMst = {
//     "class": "ADC",
//     "schemaVersion": "3.11.0",
//     "{{tenant_name}}": {
//       "class": "Tenant",
//       "{{application_name}}": {
//         "class": "Application",
//         "template": "http",
//         "serviceMain": {
//           "class": "Service_HTTP",
//           "virtualAddresses": ["{{virtual_address}}"],
//           "pool": "web_pool_{{port}}",
//         },
//         "web_pool_{{port}}": {
//           "class": "Pool",
//           "monitors": [
//             "http"
//           ],
//           "members": [
//             {
//               "servicePort": {{port::integer}},
//               "serverAddresses": {{server_addresses::array}}
//             }
//           ]
//         }
//       }
//     }
//   }
// };


// fast.Template.loadMst(helloMst);




const boo = loadTemplate(tempPathBad).then(resp => {
    console.log(`template source is valid`);
})

function loadTemplate(templatePath) {
    const tmplName = path.basename(templatePath, path.extname(templatePath));
    const tsName = path.basename(path.dirname(templatePath));
    const tsDir = path.dirname(path.dirname(templatePath));
    const provider = new fast.FsTemplateProvider(tsDir, [tsName]);
    console.log(tmplName);
    console.log(tsName);
    console.log(tsDir);
    console.log(provider);
    return provider.fetch(`${tsName}/${tmplName}`)
        .catch((e) => {
            const validationErrors = fast.Template.getValidationErrors();
            if (validationErrors !== 'null') {
                console.error(validationErrors);
            }
            console.error(`failed to load template\n${e.stack}`);
            process.exit(1);
        });
};




