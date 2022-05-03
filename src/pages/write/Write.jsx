import "./write.css"

export default function Write() {
  return (
    <div className="write">
        <img src="https://media.istockphoto.com/photos/golfer-driving-off-the-tee-in-phoenix-picture-id164170387?s=612x612" alt="" className="writeImg" />
        <form action="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                  <i className=" writeIcon fas fa-plus"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}}/>
                <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
            </div>
            <div className="writeFormGroup">
                <textarea placeholder="Tell your Story..." type="text" className="writeInput writeText"></textarea>
            </div>
            <button className="writeSubmit">PUBLISH</button>
        </form>
    </div>
  )
}
