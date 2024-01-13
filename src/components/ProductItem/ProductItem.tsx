import { Button, Card, CardBody, CardText, CardTitle } from "react-bootstrap"
import { Link } from "react-router-dom"
import { Product } from "../../types/Products"
import Rating from "../Rating/Rating"


/**
 * Product Item DIsplay Card
 * @param Product
 * @returns JSX.Element
 */
function ProductItem({
    product
}: {
    product: Product
}) {
  return (
      <Card>
          <Link to={`/product/${product.slug}`}>
              <img src={ product.image } className='card-img-top' alt={product.name} />
          </Link>
          <CardBody>
              <Link to={`/product/${product.slug}`}>
                  <CardTitle>{ product.name}</CardTitle>
              </Link>
              <Rating rating={product.rating} numReviews={product.numReviews} />
              <CardText>
                  ${product.price}
              </CardText>
              {product.countInStock === 0 ? (
                  <Button variant="light" disabled>
                      Out Of Stock
                  </Button>
              ) : (
                  <Button>
                      Add To Cart
                  </Button>
              )}
          </CardBody>
    </Card>
  )
}

export default ProductItem