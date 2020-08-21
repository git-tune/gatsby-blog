import React from "react"
import { Link } from "gatsby"
import { Card } from "react-bootstrap"

function BlogItem({ title, date, src, link }) {
  return (
    <Card className="mt-4">
      <Card.Img variant="top" src={src} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{date}</Card.Text>
        <Link to={`/${link}`}>see more</Link>
      </Card.Body>
    </Card>
  )
}

export default BlogItem
