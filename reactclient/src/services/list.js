export function getList() {
    return fetch('https://localhost:5001/api/todoitems')
        .then(data => data.json())
}

export function setItem(item) {
    return fetch('https://localhost:5001/api/todoitems', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: item,  isComplete: false})
    })
      .then(data => data.json())
   }