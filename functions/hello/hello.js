const randomName = require('random-name');

async function hello() {
  return Promise.resolve("Hello " + randomName.first());
}

exports.handler = async function(event, context) {
  try {
    const body = await hello();
    return { statusCode: 200, body };
  } catch (err) {
    return { statusCode: 500, body: err.toString() };
  }
};
