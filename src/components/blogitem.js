import React from "react"
import { Link } from "gatsby"
import { Card } from "react-bootstrap"
import sampleImage from "../images/gatsby-astronaut.png"

function BlogItem() {
  return (
    <Card className="mt-4">
      <Card.Img variant="top" src={sampleImage} />
      <Card.Body>
        <Card.Title>ブログタイトル</Card.Title>
        <Card.Text>2020/04/11</Card.Text>
        <Link to="">see more</Link>
      </Card.Body>
    </Card>
  )
}

export default BlogItem
