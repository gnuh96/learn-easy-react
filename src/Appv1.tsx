import { useEffect, useState } from "react"
import "./App.css"
import { Footer, Header, Widget } from "./components/common"
import { MainLayout } from "./components/Layout"
import { MyText } from "./feature/labs/MyText"
import { StudentTag } from "./feature/labs/Student"
import { Student } from "./models"

function App() {
  const [count, setCount] = useState(0)
  // const loading = false
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  })
  const john: Student = {
    name: "John",
    age: 3,
  }

  function handleStudentClick(student: Student) {
    console.log("student click", student)
  }
  // if (loading) return <p>Loading...</p>

  const studentList = [
    { id: 1, name: "easy" },
    { id: 2, name: "frontend" },
  ]
  return (
    <div className="App">
      <ul>
        {studentList.map((student) => (
          <li key={student.id}>{student.name}</li>
        ))}
      </ul>

      {/* {loading && <p>Loading...</p>}
      {loading ? <p>Loading...</p> : <p>Data ready!</p>}
      <p>{loading ? "Loading..." : "Data ready!"}</p>
      <MainLayout>
        <StudentTag student={john} onClick={handleStudentClick} />
      </MainLayout>
      <MyText></MyText>
      <MyText>easy frontend</MyText>
      <MyText>{123}</MyText>
      <MyText>{false}</MyText>
      <MyText>{null}</MyText>
      <MyText>{undefined}</MyText>
      <MyText>
        <span>easy</span>
      </MyText>
      <MyText>
        <span>easy</span>frontend
      </MyText>
      <MyText>
        <span>easy</span>
        <span>frontend</span>
      </MyText>
      <div>
        <div>
          <Widget title="Earning Overview">Chart 1</Widget>
        </div>
        <div>
          <Widget title="Revenu Sources">Chart 2</Widget>
        </div>
        <div>
          <Widget title="Projects">Chart 3</Widget>
        </div>
        <div>
          <Widget title="Illustrations">Chart 4</Widget>
        </div>
      </div> */}
    </div>
  )
}

export default App
