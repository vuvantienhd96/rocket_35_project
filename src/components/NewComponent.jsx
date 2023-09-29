export const NewComponent = function({child, child2, callback}) {
    const getInfoChild = () => {
      callback('this is child')
    }
    return (
      <div>
        hello NewComponent {child} : {child2};
        <button onClick={getInfoChild}>getInfo</button>
      </div>
    )
  };