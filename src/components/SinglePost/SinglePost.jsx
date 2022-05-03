import "./singlepost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img src="https://media.istockphoto.com/photos/golfer-driving-off-the-tee-in-phoenix-picture-id164170387?s=612x612" alt="" className="singlePostImg" />
            <h1 className="singlePostTitle">
                Lorem Ipsum dolor sit amet.
                <div className="singlePostEdit">
                    <i className="singlePostIcon far fa-edit"></i>
                    <i className="singlePostIcon far fa-edit"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor"> Author: <b>Kumar</b></span>
                <span className="singlePostDate"> 1 hour ago</span>
                <p className="singlePostDesc">
                    Lore Ipsum Lore Ipsum Lore Ipsum Lore IpsumLore Ipsum
                    Lore IpsumLore IpsumLore IpsumLore IpsumLore IpsumLore Ipsum.
                    Lore IpsumLore IpsumLore IpsumLore IpsumLore Ipsum
                    Lore IpsumLore IpsumLore IpsumLore IpsumLore IpsumLore IpsumLore Ipsum
                    Lore IpsumLore IpsumLore IpsumLore IpsumLore IpsumLore Ipsum
                    Lore IpsumLore IpsumLore IpsumLore IpsumLore IpsumLore IpsumLore Ipsum
                </p>
            </div>
        </div>
    </div>
  )
}
