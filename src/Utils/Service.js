// let employees = {
//     "025258": {
//       id: "025258",
//       firstName: "Freeda",
//       lastName: "Vales",
//       address: "Persistent Systems",
//       city: "Verna",
//       postalCode: "403802",
//       phone: "12345678",
//       country: "India",
//       avatarURL: "https://react.semantic-ui.com/images/avatar/small/zoe.jpg",
//       projects: {
//         "Project1": {
//           "id": "Project1",
//           "responsibilities": [
//             "Integration with APIs",
//             "Developing wireframes"
//           ]
//         },
//         "Project2": {
//           "id": "Project2",
//           "responsibilities": [
//             "Writing unit testcases",
//             "Fixing defects"
//           ]
//         },
//         "Project3": {
//           "id": "Project3",
//           "responsibilities": [
//             "Requirement gathering"
//           ]
//         },
//         "Project4": {
//           "id": "Project4",
//           "responsibilities": [
//             "Manage backend",
//             "Developing APIs"
//           ]
//         }
//       },
//       notes: ["This is my note 1", "This is my note 2"],
//       info: ["This is my info 1", "This is my info 2"],
//       hobbies: ["Gardening", "Travelling", "Cooking", "Fishing"]
//     },
//     "025256": {
//       id: "025256",
//       firstName: "Nancy",
//       lastName: "Davolio",
//       address: "Persistent Systems",
//       city: "Verna",
//       postalCode: "403802",
//       phone: "12345678",
//       country: "India",
//       avatarURL: "https://react.semantic-ui.com/images/avatar/small/nan.jpg",
//       projects: {
//         "Project1": {
//           "id": "Project1",
//           "responsibilities": [
//             "Integration with APIs",
//             "Developing wireframes"
//           ]
//         },
//         "Project2": {
//           "id": "Project2",
//           "responsibilities": [
//             "Writing unit testcases",
//             "Fixing defects"
//           ]
//         },
//         "Project3": {
//           "id": "Project3",
//           "responsibilities": [
//             "Requirement gathering"
//           ]
//         },
//         "Project4": {
//           "id": "Project4",
//           "responsibilities": [
//             "Manage backend",
//             "Developing APIs"
//           ]
//         }
//       },
//       notes: ["This is my note 1", "This is my note 2"],
//       info: ["This is my info 1", "This is my info 2"],
//       hobbies: ["Gardening", "Travelling", "Cooking", "Fishing"]
//     },
//     "025255": {
//       id: "025255",
//       firstName: "Freeda",
//       lastName: "Vales",
//       address: "Persistent Systems",
//       city: "Verna",
//       postalCode: "403802",
//       phone: "12345678",
//       country: "India",
//       avatarURL: "https://react.semantic-ui.com/images/avatar/small/tom.jpg",
//       projects: {
//         "Project1": {
//           "id": "Project1",
//           "responsibilities": [
//             "Integration with APIs",
//             "Developing wireframes"
//           ]
//         },
//         "Project2": {
//           "id": "Project2",
//           "responsibilities": [
//             "Writing unit testcases",
//             "Fixing defects"
//           ]
//         },
//         "Project3": {
//           "id": "Project3",
//           "responsibilities": [
//             "Requirement gathering"
//           ]
//         },
//         "Project4": {
//           "id": "Project4",
//           "responsibilities": [
//             "Manage backend",
//             "Developing APIs"
//           ]
//         }
//       },
//       notes: ["This is my note 1", "This is my note 2"],
//       info: ["This is my info 1", "This is my info 2"],
//       hobbies: ["Gardening", "Travelling", "Cooking", "Fishing"]
//     },
//     "025254": {
//       id: "025254",
//       firstName: "Andrew",
//       lastName: "Mead",
//       address: "Persistent Systems",
//       city: "Verna",
//       postalCode: "403802",
//       phone: "12345678",
//       country: "India",
//       avatarURL: "https://react.semantic-ui.com/images/avatar/small/zoe.jpg",
//       projects: {
//         "Project1": {
//           "id": "Project1",
//           "responsibilities": [
//             "Integration with APIs",
//             "Developing wireframes"
//           ]
//         },
//         "Project2": {
//           "id": "Project2",
//           "responsibilities": [
//             "Writing unit testcases",
//             "Fixing defects"
//           ]
//         },
//         "Project3": {
//           "id": "Project3",
//           "responsibilities": [
//             "Requirement gathering"
//           ]
//         },
//         "Project4": {
//           "id": "Project4",
//           "responsibilities": [
//             "Manage backend",
//             "Developing APIs"
//           ]
//         }
//       },
//       notes: ["This is my note 1", "This is my note 2"],
//       info: ["This is my info 1", "This is my info 2"],
//       hobbies: ["Gardening", "Travelling", "Cooking", "Fishing"]
//     }
// };





export function _getEmployees() {
  var data = require('../assets/_DATA.json');
    return new Promise((res, rej) => {
      setTimeout(() => res({ ...data }), 1000);
    });
  }