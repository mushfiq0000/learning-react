// export default function ToDo({task, isDone}) {
//
//     return(
//         <li>Task : {task}</li>
//     )
// }

// export default function ToDo({task, isDone, time= 0}) {
//     if (isDone) {
//         return <li>Done : {task} Durration : {time}</li>
//     }

//     return <li>To be done : {task} </li>

// }

// Conditional rendering = 3 ternary
// condation ? true : false

// export default function ToDo({task, isDone, time= 0}) {
//     return isDone ? <li>Done : {task} Time: {time}</li>
//     : <li>Not done : {task}</li>
// }

// conditional rendring : 4 &&

// export default function ToDo({task, isDone, time= 0}) {
//     return isDone && <li>Done Task : {task} time : {time}</li>
// }

// conditional rendring : 5 ||

// export default function ToDo({task, isDone, time= 0}) {
//     return isDone || <li>Not Done Task : {task} time : {time}</li>
// }

// conditional rendring : 6 use variablil

export default function ToDo({ task, isDone, time }) {

    // const displayTime = time ? time : 100
  let listItem;

  if (isDone === true) {
    listItem = (
      <li>
        Done : {task} time : {time ? 'I am done' : 'Not done yet' }
      </li>
    );
  } else {
    listItem = <li>To be done : {task} </li>;
  }
  return listItem;
}
