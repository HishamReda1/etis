import React, { useState } from 'react';
import { FaYoutube } from 'react-icons/fa6';
import { AiOutlineLike } from 'react-icons/ai';
import moment from 'moment'; 
import { useEffect } from 'react';

const getRandomDate = () => {
  const currentDate = new Date();
  const pastDate = new Date();
  const yearsAgo = Math.floor(Math.random() * 5) + 1; // Random number between 1 and 5 years
  pastDate.setFullYear(currentDate.getFullYear() - yearsAgo);
  const randomMonth = Math.floor(Math.random() * 12); // Random month
  const randomDay = Math.floor(Math.random() * 28); // Random day (28 days for simplicity)
  pastDate.setMonth(randomMonth);
  pastDate.setDate(randomDay);

  return pastDate;
};

const initialClientComments = [
  { img: "/must.svg", name: "MUST University", comment: "أفضل أنظمة BMS جربناها!", time: getRandomDate() },
  { img: "/P_G.png", name: "P&G", comment: "كفاءة عالية وفريق محترف من EITS.", time: getRandomDate() },
  { img: "/bue.png", name: "BUE", comment: "أنظمة موثوقة وتحكم ذكي.", time: getRandomDate() },
  { img: "/Cairo_University.png", name: "Cairo University", comment: "دقة وتنفيذ رائع في أنظمة التحكم.", time: getRandomDate() },
  { img: "/Edita.png", name: "Edita", comment: "تحكم كامل بالأجهزة والإضاءة.", time: getRandomDate() },
  { img: "/henkel.png", name: "Henkel", comment: "خدمة ممتازة بعد التركيب.", time: getRandomDate() },
  { img: "/hilton.png", name: "Hilton", comment: "مستوى عالمي في تنفيذ أنظمة BMS.", time: getRandomDate() },
  { img: "/JolieVille-Logo.png", name: "Jolie Ville", comment: "مرونة في التحكم وسهولة في الاستخدام.", time: getRandomDate() },
  { img: "/marriot.png", name: "Marriott", comment: "فريق EITS من أفضل الشركات اللي تعاملنا معاها.", time: getRandomDate() },
  { img: "/midor.png", name: "Midor", comment: "أنظمة متكاملة توفر الطاقة وتزيد الأمان.", time: getRandomDate() },
  { img: "/ministry-of-health-egypt.png", name: "Ministry of Health", comment: "دقة وسرعة في تنفيذ أنظمة المباني.", time: getRandomDate() },
  { img: "/misr-italia-logo.png", name: "Misr Italia", comment: "إدارة متكاملة للمباني الذكية.", time: getRandomDate() },
  { img: "/pepsico-logo.png", name: "PepsiCo", comment: "أداء ثابت ونظام تحكم متميز.", time: getRandomDate() },
  { img: "/petrojet-logo-white.svg", name: "Petrojet", comment: "أنظمة BMS ساعدتنا نوفر طاقة ووقت.", time: getRandomDate() },
  { img: "/telecom-egypt.png", name: "Telecom Egypt", comment: "تكنولوجيا متقدمة وسهلة الاستخدام.", time: getRandomDate() },
  { img: "/vox-cinema.png", name: "Vox Cinema", comment: "تحكم رائع بالإضاءة والتهوية والتكييف.", time: getRandomDate() },
];


const YouTubeInterface = () => {
  const [likes, setLikes] = useState(0);
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState(
    initialClientComments.map(c => ({ ...c, time: new Date(), likes: Math.floor(Math.random() * 100), id: Math.random() }))
  );

  const handleLike = () => setLikes(likes + 1);

  const handleComment = () => {
    if (commentText.trim() === '') return;
    const newComment = {
      name: "User",
      comment: commentText,
      time: new Date(),
      likes: Math.floor(Math.random() * 100),
      id: Math.random()
    };
    setComments([...comments, newComment]);
    setCommentText('');
  };

  const likeComment = (index) => {
    const updated = [...comments];
    updated[index].likes += 1;
    setComments(updated);
  };

  useEffect(() => {
    const fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('opacity-100');
      }, index * 150);
    });
  }, [comments]);

  return (
    <div className="max-w-4xl mx-auto p-4 font-sans  text-black">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <FaYoutube className="text-3xl text-red-600" />
        <p className="text-2xl font-bold text-zinc-800">Eits</p>
      </div>

      {/* Video */}
      <div className="mb-4">
      <div className="relative" style={{ paddingTop: "56.25%" }}>
  <iframe
    src="https://player.vimeo.com/video/1084162752?badge=0&autopause=0&player_id=0&app_id=58479"
    frameBorder="0"
    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
    allowFullScreen
    title="eits"
    className="absolute top-0 left-0 w-full h-full rounded-xl"
  ></iframe>
</div>
      </div>

      {/* Like + Comment Input */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
        <button
          onClick={handleLike}
          className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full border transform transition duration-300 ease-in-out hover:scale-105"
        >
          <AiOutlineLike className="text-xl" />
          <span className="font-medium">Like</span>
          <span>({likes})</span>
        </button>

        <div className="flex flex-1 items-center gap-2">
          <input
            type="text"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Add a comment..."
            className="flex-1 border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleComment}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
          >
            Comment
          </button>
        </div>
      </div>

      {/* Comments */}
      <div className="border-t pt-4">
        <h2 className="text-lg font-semibold mb-4">Comments</h2>
        <ul className="space-y-5">
          {comments.map((comment, idx) => (
            <li key={comment.id} className="flex items-start gap-3 fade-in opacity-0 transition-opacity duration-500">
              {comment.img ? (
                <img
                  src={comment.img}
                  alt={comment.name}
                  className="w-10 h-10 rounded-full object-cover border"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-gray-400 text-white flex items-center justify-center font-bold">
                  U
                </div>
              )}
              <div className="flex-1">
                <div className="flex justify-between">
                  <p className="font-semibold text-sm">{comment.name}</p>
                  <p className="text-xs text-gray-400">{moment(comment.time).fromNow()}</p>
                </div>
                <p className="text-sm text-gray-800 mb-1">{comment.comment}</p>
                <button
                  onClick={() => likeComment(idx)}
                  className="flex items-center text-sm text-gray-600 hover:text-blue-600 transition duration-300 ease-in-out"
                >
                  <AiOutlineLike className="mr-1" />
                  Like ({comment.likes})
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default YouTubeInterface;