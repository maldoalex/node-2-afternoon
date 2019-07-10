// let messages = [];
// let id = 0;

// module.exports = {
//   //request body
//   create: (req, res) => {
//     const { text, time } = req.body;
//     messages.push({ id, text, time });
//     id++;
//     res.status(200).send(messages);
//   },
//   read: (req, res) => {
//     res.status(200).send(messages);
//   },
//   update: (req, res) => {
//     const { text } = req.body;
//     const updateID = req.params.id;
//     const messageIndex = messages.findIndex(message => message.id == updateID);

//     let message = messages[messageIndex];

//     messages[messageIndex] = {
//       id: message.id,
//       text: text || message.text,
//       time: message.time
//     };
//     res.status(200).send(messages);
//   },
//   delete: (req, res) => {
//     const deleteID = req.params.id;
//     messageIndex = messages.findIndex(message => message.id == deleteID);
//     messages.splice(messageIndex, 1);
//     res.status(200).send(messages);
//   }
// };

let messages = [];
let id = 0;

module.exports = {
  create: (request, response) => {
    const { text, time } = request.body;
    messages.push({ id, text, time });
    id++;
    response.status(200).send(messages);
  },
  read: (request, response) => {
    response.status(200).send(messages);
  },
  update: (request, response) => {
    const { text } = request.body;
    const updateID = request.params.id;
    const messageIndex = messages.findIndex(message => message.id == updateID);
    let message = messages[messageIndex];

    messages[messageIndex] = {
      id: message.id,
      text: text || message.text,
      time: message.time
    };
    response.status(200).send(messages);
  },
  delete: (request, response) => {
    const deleteID = request.params.id;
    messageIndex = messages.findIndex(message => message.id == deleteID);
    messages.splice(messageIndex, 1);
    response.status(200).send(messages);
  }
};
