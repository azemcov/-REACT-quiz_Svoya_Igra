// Описание формата базы данных
// theme: тема вопросов (для раундов в теме 7 вопросов, для супер-игры у каждого вопроса своя тема)
// cat: только для вопросов в раундах. если true - доп функционал выбора кому адресовать вопрос
// (вопрос должен быть не по теме). если false - никак не влияет
// typeOfQuestion: тип вопроса
//       - text: текстовый вопрос
//       - picture: вопрос-картинка
//       - audio: аудио-вопрос (для супер-игры желательно длительностью около 30 секунд, время
// на раздумье для аудио-вопросов не ограничивается)
// linkQ: ссылка на файл вопроса (если тип вопроса - картинка или аудио)
// typeOfAnswer: тип ответа
//       - text: текстовый ответ
//       - picture: ответ-картинка
//       - audio: аудио-ответ
// linkA: ссылка на файл ответа (если тип ответа - картинка или аудио)
import josephImg from "@media/Joseph.JPG";
import demoMp3 from "@media/demo.mp3";

export const allRoundQuestions = [
  [
    {
      theme: "Тема № 1",
      line: [
        {
          cat: false,
          typeOfQuestion: "picture",
          question: "Кто самый лучший пёсик на свете?",
          linkQ: josephImg,
          typeOfAnswer: "audio",
          answer: "Это Ёся - лучший в мире пёс и друг!",
          linkA: demoMp3,
        },
        {
          cat: true,
          typeOfQuestion: "audio",
          question: "Это вопрос № 1 2",
          linkQ: demoMp3,
          typeOfAnswer: "picture",
          answer: "Это ответ № 1 2",
          linkA:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/P1030323.JPG/440px-P1030323.JPG",
        },
        {
          cat: true,
          typeOfQuestion: "picture",
          question: "Это вопрос № 1 3",
          linkQ:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Storsk%C3%A4r_IMG_5147_%2834229457096%29.jpg/600px-Storsk%C3%A4r_IMG_5147_%2834229457096%29.jpg",
          typeOfAnswer: "text",
          answer: "Это ответ № 1 3",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "picture",
          question: "Это вопрос № 1 4",
          linkQ:
            "https://upload.wikimedia.org/wikipedia/en/1/1c/Swarm_Box_Cover.jpg",
          typeOfAnswer: "text",
          answer: "Это ответ № 1 4",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "Это вопрос № 1 5",
          linkQ: "",
          typeOfAnswer: "picture",
          answer: "Это ответ № 1 5",
          linkA:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Louis_Marchand.jpg/480px-Louis_Marchand.jpg",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "Это вопрос № 1 6",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "Это ответ № 1 6",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "Это вопрос № 1 7",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "Это ответ № 1 7",
          linkA: "",
        },
      ],
    },
    {
      theme: "Тема № 2",
      line: [
        {
          cat: false,
          typeOfQuestion: "text",
          question: "Это вопрос № 2 1",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "Это ответ № 2 1",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "Это вопрос № 2 2",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "Это ответ № 2 2",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "Это вопрос № 2 3",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "Это ответ № 2 3",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "Это вопрос № 2 4",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "Это ответ № 2 4",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "Это вопрос № 2 5",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "Это ответ № 2 5",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "Это вопрос № 2 6",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "Это ответ № 2 6",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "Это вопрос № 2 7",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "Это ответ № 2 7",
          linkA: "",
        },
      ],
    },
    {
      theme: "Тема № 3",
      line: [
        {
          cat: false,
          typeOfQuestion: "text",
          question: "Это вопрос № 3 1",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "Это ответ № 3 1",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "Это вопрос № 3 2",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "Это ответ № 3 2",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "Это вопрос № 3 3",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "Это ответ № 3 3",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "Это вопрос № 3 4",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "Это ответ № 3 4",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "Это вопрос № 3 5",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "Это ответ № 3 5",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "Это вопрос № 3 6",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "Это ответ № 3 6",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "Это вопрос № 3 7",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "Это ответ № 3 7",
          linkA: "",
        },
      ],
    },
    {
      theme: "Тема № 4",
      line: [
        {
          cat: false,
          typeOfQuestion: "text",
          question: "Это вопрос № 4 1",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "Это ответ № 4 1",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "Это вопрос № 4 2",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "Это ответ № 4 2",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "Это вопрос № 4 3",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "Это ответ № 4 3",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "Это вопрос № 4 4",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "Это ответ № 4 4",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "Это вопрос № 4 5",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "Это ответ № 4 5",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "Это вопрос № 4 6",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "Это ответ № 4 6",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "Это вопрос № 4 7",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "Это ответ № 4 7",
          linkA: "",
        },
      ],
    },
    {
      theme: "Тема № 5",
      line: [
        {
          cat: false,
          typeOfQuestion: "text",
          question: "Это вопрос № 5 1",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "Это ответ № 5 1",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "Это вопрос № 5 2",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "Это ответ № 5 2",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "Это вопрос № 5 3",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "Это ответ № 5 3",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "Это вопрос № 5 4",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "Это ответ № 5 4",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "Это вопрос № 5 5",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "Это ответ № 5 5",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "Это вопрос № 5 6",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "Это ответ № 5 6",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "Это вопрос № 5 7",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "Это ответ № 5 7",
          linkA: "",
        },
      ],
    },
    {
      theme: "Тема № 6",
      line: [
        {
          cat: false,
          typeOfQuestion: "text",
          question: "Это вопрос № 6 1",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "Это ответ № 6 1",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "Это вопрос № 6 2",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "Это ответ № 6 2",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "Это вопрос № 6 3",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "Это ответ № 6 3",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "Это вопрос № 6 4",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "Это ответ № 6 4",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "Это вопрос № 6 5",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "Это ответ № 6 5",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "Это вопрос № 6 6",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "Это ответ № 6 6",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "Это вопрос № 6 7",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "Это ответ № 6 7",
          linkA: "",
        },
      ],
    },
  ],
  [
    {
      theme: "Тема № 7",
      line: [
        {
          cat: false,
          typeOfQuestion: "text",
          question: "Это вопрос № 1 1",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "Это ответ № 1 1",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "Это вопрос № 1 2",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "Это ответ № 1 2",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "Это вопрос № 1 3",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "Это ответ № 1 3",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "Это вопрос № 1 4",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "Это ответ № 1 4",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "Это вопрос № 1 5",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "Это ответ № 1 5",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "Это вопрос № 1 6",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "Это ответ № 1 6",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "Это вопрос № 1 7",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "Это ответ № 1 7",
          linkA: "",
        },
      ],
    },
    {
      theme: "Тема № 8",
      line: [
        {
          cat: false,
          typeOfQuestion: "text",
          question: "Это вопрос № 2 1",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "Это ответ № 2 1",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "Это вопрос № 2 2",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "Это ответ № 2 2",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "Это вопрос № 2 3",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "Это ответ № 2 3",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "Это вопрос № 2 4",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "Это ответ № 2 4",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "Это вопрос № 2 5",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "Это ответ № 2 5",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "Это вопрос № 2 6",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "Это ответ № 2 6",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "Это вопрос № 2 7",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "Это ответ № 2 7",
          linkA: "",
        },
      ],
    },
    {
      theme: "Тема № 9",
      line: [
        {
          cat: false,
          typeOfQuestion: "text",
          question: "Это вопрос № 3 1",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "Это ответ № 3 1",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "Это вопрос № 3 2",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "Это ответ № 3 2",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "Это вопрос № 3 3",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "Это ответ № 3 3",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "Это вопрос № 3 4",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "Это ответ № 3 4",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "Это вопрос № 3 5",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "Это ответ № 3 5",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "Это вопрос № 3 6",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "Это ответ № 3 6",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "Это вопрос № 3 7",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "Это ответ № 3 7",
          linkA: "",
        },
      ],
    },
    {
      theme: "Тема № 10",
      line: [
        {
          cat: false,
          typeOfQuestion: "text",
          question: "Это вопрос № 4 1",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "Это ответ № 4 1",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "Это вопрос № 4 2",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "Это ответ № 4 2",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "Это вопрос № 4 3",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "Это ответ № 4 3",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "Это вопрос № 4 4",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "Это ответ № 4 4",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "Это вопрос № 4 5",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "Это ответ № 4 5",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "Это вопрос № 4 6",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "Это ответ № 4 6",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "Это вопрос № 4 7",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "Это ответ № 4 7",
          linkA: "",
        },
      ],
    },
    {
      theme: "Тема № 11",
      line: [
        {
          cat: false,
          typeOfQuestion: "text",
          question: "Это вопрос № 5 1",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "Это ответ № 5 1",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "Это вопрос № 5 2",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "Это ответ № 5 2",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "Это вопрос № 5 3",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "Это ответ № 5 3",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "Это вопрос № 5 4",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "Это ответ № 5 4",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "Это вопрос № 5 5",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "Это ответ № 5 5",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "Это вопрос № 5 6",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "Это ответ № 5 6",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "Это вопрос № 5 7",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "Это ответ № 5 7",
          linkA: "",
        },
      ],
    },
    {
      theme: "Тема № 12",
      line: [
        {
          cat: false,
          typeOfQuestion: "text",
          question: "Это вопрос № 6 1",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "Это ответ № 6 1",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "Это вопрос № 6 2",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "Это ответ № 6 2",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "Это вопрос № 6 3",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "Это ответ № 6 3",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "Это вопрос № 6 4",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "Это ответ № 6 4",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "Это вопрос № 6 5",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "Это ответ № 6 5",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "Это вопрос № 6 6",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "Это ответ № 6 6",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "Это вопрос № 6 7",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "Это ответ № 6 7",
          linkA: "",
        },
      ],
    },
  ],
];

export const finalQuestions = [
  {
    theme: "Это супертема № 1",
    typeOfQuestion: "text",
    question: "Это супервопрос № 1",
    linkQ: "",
    typeOfAnswer: "text",
    answer: "Это суперответ № 1",
    linkA: "",
  },
  {
    theme: "Это супертема № 2",
    typeOfQuestion: "text",
    question: "Это супервопрос № 2",
    linkQ: "",
    typeOfAnswer: "text",
    answer: "Это суперответ № 2",
    linkA: "",
  },
  {
    theme: "Это супертема № 3",
    typeOfQuestion: "text",
    question: "Это супервопрос № 3",
    linkQ: "",
    typeOfAnswer: "text",
    answer: "Это суперответ № 3",
    linkA: "",
  },
  {
    theme: "Это супертема № 4",
    typeOfQuestion: "text",
    question: "Это супервопрос № 4",
    linkQ: "",
    typeOfAnswer: "text",
    answer: "Это суперответ № 4",
    linkA: "",
  },
  {
    theme: "Это супертема № 5",
    typeOfQuestion: "text",
    question: "Это супервопрос № 5",
    linkQ: "",
    typeOfAnswer: "text",
    answer: "Это суперответ № 5",
    linkA: "",
  },
  {
    theme: "Это супертема № 6",
    typeOfQuestion: "text",
    question: "Это супервопрос № 6",
    linkQ: "",
    typeOfAnswer: "text",
    answer: "Это суперответ № 6",
    linkA: "",
  },
  {
    theme: "Это супертема № 7",
    typeOfQuestion: "text",
    question: "Это супервопрос № 7",
    linkQ: "",
    typeOfAnswer: "text",
    answer: "Это суперответ № 7",
    linkA: "",
  },
];
