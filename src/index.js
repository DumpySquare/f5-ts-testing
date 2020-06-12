

const fast = require('@f5devcentral/f5-fast-core');
const fs = require('fs').promises;
const path = require('path');

console.log(`yyyyyyyyyyaaaaaaaaaaaaaaaahhhhhhhhhh`);

const tempPath = './tempSetGood/hello.mst'
const tempPathBad = './tempSetBad/blah.mst'
console.log(tempPath);



loadMst();





const loadMst = async () => {
    // const fast1 = await fast.Template.loadMst(tempPath);
    fast.Template.loadMst(tempPath)
        .then((template) => {
            console.log(template.getParametersSchema());
            debugger;
        });
    debugger;
}



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
// }

