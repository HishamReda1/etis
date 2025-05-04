
import React, { useState } from 'react';
import { FaYoutube } from 'react-icons/fa6';
import { AiOutlineLike } from 'react-icons/ai';
import moment from 'moment'; 

const initialClientComments = [

    { img: "/must.svg", name: "MUST University", comment: "أفضل أنظمة BMS جربناها!" },
    { img: "/P_G.png", name: "P&G", comment: "كفاءة عالية وفريق محترف من EITS." },
    { img: "/bue.png", name: "BUE", comment: "أنظمة موثوقة وتحكم ذكي." },
    { img: "/Cairo_University.png", name: "Cairo University", comment: "دقة وتنفيذ رائع في أنظمة التحكم." },
    { img: "/Edita.png", name: "Edita", comment: "تحكم كامل بالأجهزة والإضاءة." },
    { img: "/henkel.png", name: "Henkel", comment: "خدمة ممتازة بعد التركيب." },
    { img: "/hilton.png", name: "Hilton", comment: "مستوى عالمي في تنفيذ أنظمة BMS." },
    { img: "/JolieVille-Logo.png", name: "Jolie Ville", comment: "مرونة في التحكم وسهولة في الاستخدام." },
    { img: "/marriot.png", name: "Marriott", comment: "فريق EITS من أفضل الشركات اللي تعاملنا معاها." },
    { img: "/midor.png", name: "Midor", comment: "أنظمة متكاملة توفر الطاقة وتزيد الأمان." },
    { img: "/ministry-of-health-egypt.png", name: "Ministry of Health", comment: "دقة وسرعة في تنفيذ أنظمة المباني." },
    { img: "/misr-italia-logo.png", name: "Misr Italia", comment: "إدارة متكاملة للمباني الذكية." },
    { img: "/pepsico-logo.png", name: "PepsiCo", comment: "أداء ثابت ونظام تحكم متميز." },
    { img: "/petrojet-logo-white.svg", name: "Petrojet", comment: "أنظمة BMS ساعدتنا نوفر طاقة ووقت." },
    { img: "/telecom-egypt.png", name: "Telecom Egypt", comment: "تكنولوجيا متقدمة وسهلة الاستخدام." },
    { img: "/vox-cinema.png", name: "Vox Cinema", comment: "تحكم رائع بالإضاءة والتهوية والتكييف." },
 
  
];

const YouTubeInterface = () => {
  const [likes, setLikes] = useState(0);
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState([
    ...initialClientComments.map(c => ({ ...c, time: new Date(), likes: 0 }))
  ]);

  const handleLike = () => setLikes(likes + 1);

  const handleComment = () => {
    if (commentText.trim() === '') return;
    const newComment = {
      name: "User",
      comment: commentText,
      time: new Date(),
      likes: 0
    };
    setComments([...comments, newComment]);
    setCommentText('');
  };

  const likeComment = (index) => {
    const updated = [...comments];
    updated[index].likes += 1;
    setComments(updated);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 font-sans bg-white text-black">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <FaYoutube className="text-3xl text-red-600" />
        <p className="text-2xl font-bold text-zinc-800">Eits</p>
      </div>

      {/* Video */}
      <div className="mb-4">
        <video className="w-full rounded-xl" controls>
          <source src="/intro.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </div>

      {/* Like + Comment Input */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
        <button
          onClick={handleLike}
          className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full border"
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
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full"
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
            <li key={idx} className="flex items-start gap-3">
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
                  className="flex items-center text-sm text-gray-600 hover:text-blue-600"
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
