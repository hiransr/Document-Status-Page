import './App.css'
import NavBar from './Components/NavBar'
import TableContents from './Components/TableContents'
function App() {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className=" flex justify-center">
        <div className="flex flex-col w-[800px] mt-[30px]">
          <div className="flex justify-center">
            <select name="op" id="option" className="rounded">
              <option value="naac">NAAC</option>
              <option value="lqac">LQAC</option>
              <option value="bicte">BICTE</option>
            </select>
          </div>
          <div className="flex justify-center">
            <TableContents />
          </div>
          <div className="flex flex-row"></div>
        </div>
      </div>
    </>
  )
}

export default App
