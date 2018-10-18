export const TEST = "TEST";
export const ACTIVE_VOTE = "ACTIVE_VOTE";
export const VOTING_OPTIONS = "VOTING_OPTIONS";
export const TODOS = "TODOS";

export function addTest(input) {
  return {
    type: TEST,
    payload: input
  };
}

export function getTodoList() {
  return {
    type: TODOS,
    payload: [
      {
        task:
          "This is a sample task to show what the display will look like when information is entered #1",
        completed: false,
        date: null
      },
      {
        task:
          "This is a sample task to show what the display will look like when information is entered #2",
        completed: true,
        date: new Date().toDateString()
      },
      {
        task:
          "This is a sample task to show what the display will look like when information is entered #3",
        completed: false,
        date: null
      },
      {
        task:
          "This is a sample task to show what the display will look like when information is entered #4",
        completed: false,
        date: null
      },
      {
        task:
          "This is a sample task to show what the display will look like when information is entered #5",
        completed: true,
        date: new Date().toDateString()
      }
    ]
  };
}

export function votingOptions() {
  return {
    type: VOTING_OPTIONS,
    payload: [
      {
        name: "angular",
        image:
          "https://cdn-images-1.medium.com/max/1600/1*J_-vtvcqV1-v14WqkPWhiQ.png",
        votes: 0
      },
      {
        name: "react",
        image:
          "https://arcweb.co/wp-content/uploads/2016/10/react-logo-1000-transparent.png",
        votes: 0
      },
      {
        name: "vue",
        image:
          "https://cdn.colab55.com/images/1527857003/studio/1799/art/110959/stickers/fosco/standard/1.png",
        votes: 0
      }
    ]
  };
}

export function activeVotingSelection(selection) {
  selection.votes += 1;
  let selectionCopy = JSON.parse(JSON.stringify(selection));
  return {
    type: ACTIVE_VOTE,
    payload: selectionCopy
  };
}
