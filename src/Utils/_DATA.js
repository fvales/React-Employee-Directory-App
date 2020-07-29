let employees = {
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
    "025256": {
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
    "025257": {
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