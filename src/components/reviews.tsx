"use client";

import { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";

interface Review {
  _id: string;
  name: string;
  comment: string;
  createdAt: string;
}

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  });
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    fetch("/api/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setLoading(false);
      });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const res = await fetch("/api/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      const newReview = await res.json();
      setReviews([newReview, ...reviews]);
      setFormData({ name: "", email: "", comment: "" });
    }
    setSubmitting(false);
  };

  return (
    <div className="p-4 w-full md:w-1/2 text-left">
      <h2 className="text-xl md:text-2xl font-semibold mb-4">Customer Reviews</h2>

      {/* Review Form */}
      <form onSubmit={handleSubmit} className="space-y-2">
        <input
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          className="border p-2 w-full"
        />
        <input
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          className="border p-2 w-full"
        />
        <textarea
          placeholder="Your Comment"
          value={formData.comment}
          onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
          required
          className="border p-2 w-full"
        />
        <button
          type="submit"
          className="bg-[#ff9f0d] text-white px-4 py-2 w-full"
          disabled={submitting}
        >
          {submitting ? <ClipLoader size={18} color="white" /> : "Submit Review"}
        </button>
      </form>

      {loading && (
        <div className="flex justify-start mt-4">
          <ClipLoader size={30} color="#3b82f6" />
        </div>
      )}

      {/* Reviews List */}
      <div className="mt-4 space-y-4">
        {/* Show message only if no reviews and loading is complete */}
        {!loading && reviews.length === 0 ? (
          <p className="text-center text-gray-500">No reviews yet. Be the first to leave a review!</p>
        ) : (
          reviews.slice(0, visibleCount).map((review) => (
            <div key={review._id} className="border p-4 rounded-lg shadow-sm">
              <h3 className="font-bold">{review.name}</h3>
              <p>{review.comment}</p>
              <p className="text-xs text-[#FF9F0D]">{new Date(review.createdAt).toLocaleString()}</p>
            </div>
          ))
        )}

        <div className="text-center mt-4">
          {reviews.length > visibleCount ? (
            <button
              onClick={() => setVisibleCount(reviews.length)}
              className="bg-gray-200 px-4 py-2 text-sm mx-2"
            >
              Load More Reviews
            </button>
          ) : reviews.length > 4 && (
            <button
              onClick={() => setVisibleCount(4)}
              className="bg-[#ff9f0d] text-white px-4 py-2 text-sm mx-2"
            >
              Show Less
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
