import React from "react";
import { FaRegStar } from "react-icons/fa";
import Modal from "react-modal";

function ReviewsModal({ isOpen, closeModal, reviews, loading, error }) {
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const sortedReviews = [...reviews].sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at)
  );

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Reviews"
      className="fixed max-h-[800px] overflow-y-scroll top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-[30%] w-full max-w-[800px] z-50 "
      overlayClassName="fixed inset-0 bg-black bg-opacity-70 z-40 "
    >
      <div className="relative bg-white px-4 py-6">
        <div className="fixed top-0 right-0 left-0 w-full flex justify-between px-4 z-10 ">
          <h2 className="text-xl font-semibold py-4">Reviews</h2>
          <button onClick={closeModal} className="mt-3 text-2xl ">
            X
          </button>
        </div>
        {loading ? (
          <p>Loading reviews...</p>
        ) : error ? (
          <p className="text-red-600">{error}</p>
        ) : sortedReviews.length === 0 ? (
          <p>No reviews available for this movie.</p>
        ) : (
          <ul className="pt-[36px]">
            {sortedReviews.map((review) => (
              <li
                key={review.id}
                className="mb-4 relative bg-[#0d253f] text-white px-4 py-6 "
              >
                <p className="absolute top-2 right-2">
                  {formatDate(review.created_at)}
                </p>
                <div className="flex items-center pt-4">
                  <h4 className="font-semibold pr-2">User: {review.author}</h4>
                  <span className="pr-[2px]">
                    {review.author_details.rating}
                  </span>{" "}
                  <FaRegStar fill="yellow" />
                </div>
                <p className="pt-4">{review.content}</p>
              </li>
            ))}
          </ul>
        )}
        <div className="pt-2 flex items-center justify-center">
          <button
            onClick={closeModal}
            className="rounded-md px-6 py-1 border bg-[#0d253f] text-white uppercase tracking-wider"
          >
            Close reviews
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default ReviewsModal;
