let employees = {
    "025256": {
      id: "025256",
      firstName: "Freeda",
      lastName: "Vales",
      address: "Persistent Systems",
      city: "Verna",
      postalCode: "403802",
      phone: "12345678",
      country: "India",
      avatarURL: "https://react.semantic-ui.com/images/avatar/small/zoe.jpg",
      projects: {
        "Project1": {
          "id": "Project1",
          "responsibilities": [
            "Integration with APIs",
            "Developing wireframes"
          ]
        },
        "Project2": {
          "id": "Project2",
          "responsibilities": [
            "Writing unit testcases",
            "Fixing defects"
          ]
        },
        "Project3": {
          "id": "Project3",
          "responsibilities": [
            "Requirement gathering"
          ]
        },
        "Project4": {
          "id": "Project4",
          "responsibilities": [
            "Manage backend",
            "Developing APIs"
          ]
        }
      },
      notes: ["This is my note 1", "This is my note 2"],
      info: ["This is my info 1", "This is my info 2"],
      hobbies: ["Gardening", "Travelling", "Cooking", "Fishing"]
    },
    "025255": {
      id: "025255",
      firstName: "Freeda",
      lastName: "Vales",
      address: "Persistent Systems",
      city: "Verna",
      postalCode: "403802",
      phone: "12345678",
      country: "India",
      avatarURL: "https://react.semantic-ui.com/images/avatar/small/zoe.jpg",
      projects: {
        "Project1": {
          "id": "Project1",
          "responsibilities": [
            "Integration with APIs",
            "Developing wireframes"
          ]
        },
        "Project2": {
          "id": "Project2",
          "responsibilities": [
            "Writing unit testcases",
            "Fixing defects"
          ]
        },
        "Project3": {
          "id": "Project3",
          "responsibilities": [
            "Requirement gathering"
          ]
        },
        "Project4": {
          "id": "Project4",
          "responsibilities": [
            "Manage backend",
            "Developing APIs"
          ]
        }
      },
      notes: ["Hey, This is note 1", "Hey, This is note 2"],
      info: {

      },
      hobbies: ["Gardening", "Travelling", "Cooking", "Fishing"]
    },
    "025257": {
      id: "025257",
      firstName: "Freeda",
      lastName: "Vales",
      address: "Persistent Systems",
      city: "Verna",
      postalCode: "403802",
      phone: "12345678",
      country: "India",
      avatarURL: "https://react.semantic-ui.com/images/avatar/small/zoe.jpg",
      projects: {
        "8xf0y6ziyjabvozdd253nd": "optionOne",
        "6ni6ok3ym7mf1p33lnez": "optionTwo",
        "am8ehyc8byjqgar0jgpub9": "optionTwo",
        "loxhs1bqm25b708cmbf3g": "optionTwo"
      },
      notes: ["8xf0y6ziyjabvozdd253nd", "am8ehyc8byjqgar0jgpub9"],
      info: {

      },
      hobbies: ["Gardening", "Travelling", "Cooking", "Fishing"]
    },
    "025258": {
      id: "025258",
      firstName: "Freeda",
      lastName: "Vales",
      address: "Persistent Systems",
      city: "Verna",
      postalCode: "403802",
      phone: "12345678",
      country: "India",
      avatarURL: "https://react.semantic-ui.com/images/avatar/small/zoe.jpg",
      projects: {
        "8xf0y6ziyjabvozdd253nd": "optionOne",
        "6ni6ok3ym7mf1p33lnez": "optionTwo",
        "am8ehyc8byjqgar0jgpub9": "optionTwo",
        "loxhs1bqm25b708cmbf3g": "optionTwo"
      },
      notes: ["8xf0y6ziyjabvozdd253nd", "am8ehyc8byjqgar0jgpub9"],
      info: {

      },
      hobbies: ["Gardening", "Travelling", "Cooking", "Fishing"]
    }
};





export function _getEmployees() {
    return new Promise((res, rej) => {
      setTimeout(() => res({ ...employees }), 1000);
    });
  }