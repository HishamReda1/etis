import React, { useState, useEffect, useRef } from 'react';
import { FaYoutube } from 'react-icons/fa6';
import { AiOutlineLike } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';
import moment from 'moment'; 
import { useParams } from 'next/navigation';
import { createPortal } from 'react-dom';

const getRandomDate = () => {
  const currentDate = new Date();
  const pastDate = new Date();
  const yearsAgo = Math.floor(Math.random() * 5) + 1; 
  pastDate.setFullYear(currentDate.getFullYear() - yearsAgo);
  const randomMonth = Math.floor(Math.random() * 12);
  const randomDay = Math.floor(Math.random() * 28); 
  pastDate.setMonth(randomMonth);
  pastDate.setDate(randomDay);

  return pastDate;
};

const clientComments = {
  en: [
    { img: "/midor.png", name: "Midor", comment: "Integrated systems that save energy and increase safety.", time: getRandomDate() },
    { img: "/ministry-of-health-egypt.png", name: "Ministry of Health", comment: "Accuracy and speed in implementing building systems.", time: getRandomDate() },
    { img: "/misr-italia-logo.png", name: "Misr Italia", comment: "Integrated management of smart buildings.", time: getRandomDate() },
    { img: "/pepsico-logo.png", name: "PepsiCo", comment: "Consistent performance and excellent control system.", time: getRandomDate() },
    { img: "/petrojet-logo-white.svg", name: "Petrojet", comment: "BMS systems helped us save energy and time.", time: getRandomDate() },
    { img: "/telecom-egypt.png", name: "Telecom Egypt", comment: "Advanced and easy-to-use technology.", time: getRandomDate() },
    { img: "/vox-cinema.png", name: "Vox Cinema", comment: "Excellent control of lighting, ventilation and air conditioning.", time: getRandomDate() },
  ],
  ar: [
    { img: "/midor.png", name: "Midor", comment: "أنظمة متكاملة توفر الطاقة وتزيد الأمان.", time: getRandomDate() },
    { img: "/ministry-of-health-egypt.png", name: "Ministry of Health", comment: "دقة وسرعة في تنفيذ أنظمة المباني.", time: getRandomDate() },
    { img: "/misr-italia-logo.png", name: "Misr Italia", comment: "إدارة متكاملة للمباني الذكية.", time: getRandomDate() },
    { img: "/pepsico-logo.png", name: "PepsiCo", comment: "أداء ثابت ونظام تحكم متميز.", time: getRandomDate() },
    { img: "/petrojet-logo-white.svg", name: "Petrojet", comment: "أنظمة BMS ساعدتنا نوفر طاقة ووقت.", time: getRandomDate() },
    { img: "/telecom-egypt.png", name: "Telecom Egypt", comment: "تكنولوجيا متقدمة وسهلة الاستخدام.", time: getRandomDate() },
    { img: "/vox-cinema.png", name: "Vox Cinema", comment: "تحكم رائع بالإضاءة والتهوية والتكييف.", time: getRandomDate() },
  ],
  de: [
    { img: "/midor.png", name: "Midor", comment: "Integrierte Systeme, die Energie sparen und die Sicherheit erhöhen.", time: getRandomDate() },
    { img: "/ministry-of-health-egypt.png", name: "Ministry of Health", comment: "Präzision und Geschwindigkeit bei der Implementierung von Gebäudesystemen.", time: getRandomDate() },
    { img: "/misr-italia-logo.png", name: "Misr Italia", comment: "Integriertes Management von Smart Buildings.", time: getRandomDate() },
    { img: "/pepsico-logo.png", name: "PepsiCo", comment: "Konstante Leistung und ausgezeichnetes Kontrollsystem.", time: getRandomDate() },
    { img: "/petrojet-logo-white.svg", name: "Petrojet", comment: "BMS-Systeme halfen uns, Energie und Zeit zu sparen.", time: getRandomDate() },
    { img: "/telecom-egypt.png", name: "Telecom Egypt", comment: "Fortschrittliche und benutzerfreundliche Technologie.", time: getRandomDate() },
    { img: "/vox-cinema.png", name: "Vox Cinema", comment: "Ausgezeichnete Steuerung von Beleuchtung, Belüftung und Klimatisierung.", time: getRandomDate() },
  ],
  zh: [
    { img: "/midor.png", name: "Midor", comment: "集成系统节省能源并提高安全性。", time: getRandomDate() },
    { img: "/ministry-of-health-egypt.png", name: "Ministry of Health", comment: "建筑系统实施的准确性和速度。", time: getRandomDate() },
    { img: "/misr-italia-logo.png", name: "Misr Italia", comment: "智能建筑的集成管理。", time: getRandomDate() },
    { img: "/pepsico-logo.png", name: "PepsiCo", comment: "稳定的性能和出色的控制系统。", time: getRandomDate() },
    { img: "/petrojet-logo-white.svg", name: "Petrojet", comment: "BMS系统帮助我们节省能源和时间。", time: getRandomDate() },
    { img: "/telecom-egypt.png", name: "Telecom Egypt", comment: "先进且易于使用的技术。", time: getRandomDate() },
    { img: "/vox-cinema.png", name: "Vox Cinema", comment: "出色的照明、通风和空调控制。", time: getRandomDate() },
  ]
};

const interfaceText = {
  en: {
    like: "Like",
    comment: "Comment",
    addComment: "Add a comment...",
    comments: "Comments"
  },
  ar: {
    like: "إعجاب",
    comment: "تعليق",
    addComment: "أضف تعليقاً...",
    comments: "التعليقات"
  },
  fr: {
    like: "J'aime",
    comment: "Commenter",
    addComment: "Ajouter un commentaire...",
    comments: "Commentaires"
  },
  es: {
    like: "Me gusta",
    comment: "Comentar",
    addComment: "Añadir un comentario...",
    comments: "Comentarios"
  },
  de: {
    like: "Gefällt mir",
    comment: "Kommentar",
    addComment: "Kommentar hinzufügen...",
    comments: "Kommentare"
  },
  zh: {
    like: "赞",
    comment: "评论",
    addComment: "添加评论...",
    comments: "评论"
  }
};

const VideoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[9999] bg-black bg-opacity-90 flex items-center justify-center">
      <div className="relative w-full h-full max-w-7xl mx-auto p-4">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 z-[10000]"
        >
          <IoMdClose className="text-3xl" />
        </button>
        <div className="relative w-full h-full">
          <iframe
            src="https://player.vimeo.com/video/1084162752?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            allowFullScreen
            title="eits"
            className="w-full h-full rounded-xl"
          ></iframe>
        </div>
      </div>
    </div>,
    document.body
  );
};

const YouTubeInterface = () => {
  const [likes, setLikes] = useState(0);
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState(
    clientComments.en.map(c => ({ ...c, time: new Date(), likes: Math.floor(Math.random() * 100), id: Math.random() }))
  );
  const params = useParams();
  const locale = params?.locale || "en";
  const t = interfaceText[locale] || interfaceText.en;

  const videoContainerRef = useRef(null);

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
    <div className="max-w-4xl mx-auto p-4 font-sans text-black">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <FaYoutube className="text-3xl text-red-600" />
        <p className="text-2xl font-bold text-zinc-800">Eits</p>
      </div>

      {/* Video */}
      <div className="mb-4 relative">
        <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
          <iframe
            src="https://player.vimeo.com/video/1084162752?badge=0&autopause=0&player_id=0&app_id=58479"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            title="eits-introduction"
          />
        </div>
      </div>

      {/* Like + Comment Input */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
        <button
          onClick={handleLike}
          className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full border transform transition duration-300 ease-in-out hover:scale-105"
        >
          <AiOutlineLike className="text-xl" />
          <span className="font-medium">{t.like}</span>
          <span>({likes})</span>
        </button>

        <div className="flex flex-1 items-center gap-2">
          <input
            type="text"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder={t.addComment}
            className="flex-1 border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleComment}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
          >
            {t.comment}
          </button>
        </div>
      </div>

      {/* Comments */}
      <div className="border-t pt-4">
        <h2 className="text-lg font-semibold mb-4">{t.comments}</h2>
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
                  {t.like} ({comment.likes})
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export { VideoModal };
export default YouTubeInterface;