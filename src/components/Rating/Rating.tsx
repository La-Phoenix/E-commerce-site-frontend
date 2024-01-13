/**
 * Custom Rating Component
 * @returns JSX.Element
 */
export default function Rating(props: {
    rating?: number,
    numReviews?: number,
    caption?: string,
}) {
  const {rating, numReviews, caption} = props

  return (
      <div className="rating">
          <span>
              <i className={
                  rating && rating >= 1
                      ? 'fas fa-star'
                      : rating && rating >= 0.5
                          ? 'fas fa-star-half-alt'
                          : 'far fa-star'
              } />
          </span>
          <span>
              <i className={
                  rating && rating >= 2
                      ? 'fas fa-star'
                      : rating && rating >= 1.5
                          ? 'fas fa-star-half-alt'
                          : 'far fa-star'
              } />
          </span>
          <span>
              <i className={
                  rating && rating >= 3
                      ? 'fas fa-star'
                      : rating && rating >= 2.5
                          ? 'fas fa-star-half-alt'
                          : 'far fa-star'
              } />
          </span>
          <span>
              <i className={
                  rating && rating >= 3
                      ? 'fas fa-star'
                      : rating && rating >= 2.5
                          ? 'fas fa-star-half-alt'
                          : 'far fa-star'
              } />
          </span>
          <span>
              <i className={
                  rating && rating >= 4
                      ? 'fas fa-star'
                      : rating && rating >= 3.5
                          ? 'fas fa-star-half-alt'
                          : 'far fa-star'
              } />
          </span>
          <span>
              <i className={
                  rating && rating >= 5
                      ? 'fas fa-star'
                      : rating && rating >= 4.5
                          ? 'fas fa-star-half-alt'
                          : 'far fa-star'
              } />
              </span>
              {caption ? (
                  <span>
                      {caption}
                  </span>
              ) : numReviews && numReviews != 0 ? (
                      <span>{ ' ' + numReviews + ' reviews'}</span>
                  ) : (
                          ''
              )}
    </div>
  )
}
