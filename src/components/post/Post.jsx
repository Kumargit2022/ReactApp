import "./post.css"

export default function Post() {
  return (
    <div className="post">
      <img src="https://media.istockphoto.com/photos/golfer-driving-off-the-tee-in-phoenix-picture-id164170387?s=612x612" alt="" className="postImg" />
      <div className="postInfo">
          <div className="postCats">
              <span className="postCat">Music</span>
              <span className="postCat">Life</span>             
          </div>
          <span className="postTitle">
             LoreLore LoreLoreLoreLoreLore.
          </span>
          <hr/>
          
          <div className="postDate">1 hour ago</div>
          <p className="postDesc">Lore Ipsum Lore IpsumLore Ipsum Lore Ipsum.
          Lore IpsumLore IpsumLore IpsumLore IpsumLore IpsumLore IpsumLore Ipsum.
          </p>

      </div>
    </div>
  )
}
