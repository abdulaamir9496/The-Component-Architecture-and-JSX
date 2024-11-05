// import Props from './components/Props'
// import PropsDestructuring from './components/PropsDestructuring'
// import ArrayComponent from './components/ArrayComponent'
// import ObjectComponent from './components/ObjectComponent'
import RenderingArrayElements from './components/RenderingArrayElements'

const App = () => {

  //Passing Arrays and Objects as props
  // const myArray = ["React", "Redux", "JavaScript", "CSS"];
  // const myObject = {
  //   name: "Aamir",
  //   age: 28,
  //   profession: "Developer",
  // };

  return (
    <div>
      <>
      {/* The Component Architecture and JSX  */}

      {/* Props and Reusing Components */}
        {/* <Props name = 'aamir'/>
        <Props username = '@muhammadaamir'/>
        <Props email = 'aamir@gmail.com'/>
        <Props password = 'one2ka4'/>
        <Props confirmPassword = 'one2ka4'/> */}

        {/* Props Destructuring */}
        {/* <PropsDestructuring name= 'Muhammad' />
        <PropsDestructuring username= '@Muhammadaamir' />
        <PropsDestructuring email= 'Muhammad@gmai.com' />
        <PropsDestructuring password= 'four2ka8' />
        <PropsDestructuring confirmPassword= 'four2ka8' /> */}

        {/* Passing Arrays and Objects as props */}
        
        {/* <h1>Passing Array and Object as Props</h1>
        <ArrayComponent items={myArray} />
        <ObjectComponent user={myObject} /> */}

        {/* Rendering Array Elements  */}
        <RenderingArrayElements />
          

      </>
    </div>
  )
}

export default App

// Reusability of react components shown in above example using props
// There is more efficient way to write props which is known as 'destructuring'