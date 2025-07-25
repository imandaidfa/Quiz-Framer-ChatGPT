// Array of multiple-choice questions
const multipleChoiceQuestions = [
    {
        question: "Apa itu Framer?",
        options: [
            "Aplikasi pengedit foto",
            "Alat desain dan prototipe interaktif",
            "Game online",
            "Program spreadsheet"
        ],
        answer: "Alat desain dan prototipe interaktif",
        explanation: "Framer adalah alat canggih yang digunakan desainer untuk membuat prototipe aplikasi dan website yang sangat interaktif, bahkan bisa menggunakan kode asli."
    },
    {
        question: "Fitur utama Framer yang membedakannya adalah kemampuannya untuk...",
        options: [
            "Membuat animasi 3D",
            "Menggunakan komponen kode nyata untuk desain",
            "Menulis buku",
            "Mengelola database"
        ],
        answer: "Menggunakan komponen kode nyata untuk desain",
        explanation: "Framer memungkinkan desainer menggunakan komponen kode asli (seperti dari React) langsung dalam desain mereka, membuat prototipe lebih realistis dan mudah diimplementasikan oleh pengembang."
    },
    {
        question: "Siapa yang mengembangkan ChatGPT?",
        options: [
            "Google",
            "Microsoft",
            "OpenAI",
            "Apple"
        ],
        answer: "OpenAI",
        explanation: "ChatGPT dikembangkan oleh OpenAI, sebuah perusahaan riset AI yang terkenal."
    },
    {
        question: "Apa kegunaan utama dari ChatGPT?",
        options: [
            "Membuat video",
            "Menghasilkan teks dan menjawab pertanyaan",
            "Mengedit audio",
            "Menggambar ilustrasi"
        ],
        answer: "Menghasilkan teks dan menjawab pertanyaan",
        explanation: "ChatGPT adalah model bahasa yang dirancang untuk menghasilkan teks mirip manusia, menjawab pertanyaan, dan berinteraksi dalam percakapan."
    },
    {
        question: "ChatGPT didasarkan pada jenis model AI apa?",
        options: [
            "Model cuaca",
            "Model bahasa besar (LLM)",
            "Model grafik",
            "Model fisika"
        ],
        answer: "Model bahasa besar (LLM)",
        explanation: "ChatGPT adalah contoh dari Large Language Model (LLM), yaitu model AI yang dilatih dengan data teks sangat banyak untuk memahami dan menghasilkan bahasa manusia."
    },
    {
        question: "Jika kamu butuh ide untuk cerita, ChatGPT bisa membantumu dengan...",
        options: [
            "Memasak makanan",
            "Memberikan ide dan kerangka cerita",
            "Membangun rumah",
            "Mengemudikan mobil"
        ],
        answer: "Memberikan ide dan kerangka cerita",
        explanation: "ChatGPT bisa menjadi asisten kreatif yang hebat untuk brainstorming ide, membuat kerangka cerita, atau bahkan menulis draf awal."
    },
    {
        question: "Framer paling cocok digunakan untuk...",
        options: [
            "Membuat presentasi sekolah",
            "Mendesain antarmuka pengguna (UI) dan pengalaman pengguna (UX)",
            "Mengedit video pendek",
            "Membuat musik"
        ],
        answer: "Mendesain antarmuka pengguna (UI) dan pengalaman pengguna (UX)",
        explanation: "Framer dirancang khusus untuk desainer UI/UX agar bisa membuat prototipe yang sangat interaktif dan realistis."
    },
    {
        question: "Apa yang tidak bisa dilakukan ChatGPT secara langsung?",
        options: [
            "Menulis email",
            "Memberikan saran resep",
            "Merasakan emosi atau memiliki kesadaran",
            "Membantu belajar bahasa baru"
        ],
        answer: "Merasakan emosi atau memiliki kesadaran",
        explanation: "ChatGPT adalah program komputer; ia tidak memiliki emosi, kesadaran, atau pengalaman pribadi seperti manusia."
    },
    {
        question: "Mengapa desainer suka Framer?",
        options: [
            "Karena gratis",
            "Karena bisa membuat prototipe yang sangat mirip aplikasi sungguhan",
            "Karena ukurannya kecil",
            "Karena bisa digunakan offline"
        ],
        answer: "Karena bisa membuat prototipe yang sangat mirip aplikasi sungguhan",
        explanation: "Kemampuan Framer untuk membuat prototipe yang sangat detail dan interaktif, bahkan dengan komponen kode, membuatnya sangat disukai untuk simulasi aplikasi nyata."
    },
    {
        question: "Versi awal dari teknologi di balik ChatGPT dikenal sebagai...",
        options: [
            "GPT-1",
            "ChatBot 2000",
            "AI Buddy",
            "SmartTalk"
        ],
        answer: "GPT-1",
        explanation: "Generative Pre-trained Transformer (GPT) adalah seri model yang dikembangkan OpenAI, dengan GPT-1 menjadi salah satu versi awalnya."
    }
];

// Array of fill-in-the-blank questions
const fillInTheBlankQuestions = [
    {
        question: "Framer adalah alat desain dan ________ yang memungkinkan kamu membuat antarmuka yang interaktif.",
        answer: "prototipe",
        explanation: "Framer adalah alat desain dan prototipe yang memungkinkan kamu membuat antarmuka yang interaktif."
    },
    {
        question: "Salah satu kelebihan Framer adalah kemampuannya untuk menggunakan ________ kode nyata dalam desain.",
        answer: "komponen",
        explanation: "Salah satu kelebihan Framer adalah kemampuannya untuk menggunakan komponen kode nyata dalam desain."
    },
    {
        question: "ChatGPT adalah sebuah ________ AI yang dikembangkan oleh OpenAI.",
        answer: "chatbot",
        explanation: "ChatGPT adalah sebuah chatbot AI yang dikembangkan oleh OpenAI."
    },
    {
        question: "ChatGPT dapat ________ teks, menjawab pertanyaan, dan melakukan berbagai tugas berbasis bahasa.",
        answer: "menghasilkan",
        explanation: "ChatGPT dapat menghasilkan teks, menjawab pertanyaan, dan melakukan berbagai tugas berbasis bahasa."
    },
    {
        question: "Teknologi di balik ChatGPT disebut ________ Bahasa Besar (LLM).",
        answer: "Model",
        explanation: "Teknologi di balik ChatGPT disebut Model Bahasa Besar (LLM)."
    },
    {
        question: "ChatGPT bisa sangat membantu dalam tugas-tugas seperti ________ ide atau menulis draf.",
        answer: "brainstorming",
        explanation: "ChatGPT bisa sangat membantu dalam tugas-tugas seperti brainstorming ide atau menulis draf."
    },
    {
        question: "Framer sering digunakan oleh desainer untuk membuat ________ yang terlihat dan terasa seperti aplikasi sungguhan.",
        answer: "prototipe",
        explanation: "Framer sering digunakan oleh desainer untuk membuat prototipe yang terlihat dan terasa seperti aplikasi sungguhan."
    },
    {
        question: "Meskipun sangat pintar, ChatGPT tidak memiliki ________ atau perasaan.",
        answer: "kesadaran",
        explanation: "Meskipun sangat pintar, ChatGPT tidak memiliki kesadaran atau perasaan."
    },
    {
        question: "OpenAI adalah perusahaan yang bertanggung jawab atas pengembangan ________.",
        answer: "ChatGPT",
        explanation: "OpenAI adalah perusahaan yang bertanggung jawab atas pengembangan ChatGPT."
    },
    {
        question: "ChatGPT terus ________ dengan versi baru seperti GPT-4 yang lebih canggih.",
        answer: "berkembang",
        explanation: "ChatGPT terus berkembang dengan versi baru seperti GPT-4 yang lebih canggih."
    }
];

const mcqContainer = document.getElementById('multipleChoiceQuestions');
const fibContainer = document.getElementById('fillInTheBlankQuestions');
const quizForm = document.getElementById('quizForm');
const resultsSection = document.getElementById('results');
const scoreDisplay = document.getElementById('scoreDisplay');
const feedbackSection = document.getElementById('feedback');

// Function to render multiple-choice questions
function renderMultipleChoiceQuestions() {
    multipleChoiceQuestions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('mb-6');
        questionDiv.innerHTML = `
            <p class="question-text">${index + 1}. ${q.question}</p>
            <div class="options">
                ${q.options.map((option, optIndex) => `
                    <div>
                        <input type="radio" id="mcq-${index}-option-${optIndex}" name="mcq-${index}" value="${option}" class="hidden">
                        <label for="mcq-${index}-option-${optIndex}" class="option-label">${option}</label>
                    </div>
                `).join('')}
            </div>
        `;
        mcqContainer.appendChild(questionDiv);
    });
}

// Function to render fill-in-the-blank questions
function renderFillInTheBlankQuestions() {
    fillInTheBlankQuestions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('mb-6');
        questionDiv.innerHTML = `
            <p class="question-text">${index + 1}. ${q.question}</p>
            <input type="text" id="fib-${index}" name="fib-${index}" class="fill-in-input" placeholder="Ketik jawaban Anda di sini...">
        `;
        fibContainer.appendChild(questionDiv);
    });
}

// Initialize quiz
document.addEventListener('DOMContentLoaded', () => {
    renderMultipleChoiceQuestions();
    renderFillInTheBlankQuestions();
});

// Handle form submission
quizForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    let score = 0;
    feedbackSection.innerHTML = ''; // Clear previous feedback

    // Check multiple-choice answers
    multipleChoiceQuestions.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="mcq-${index}"]:checked`);
        const questionFeedbackDiv = document.createElement('div');
        questionFeedbackDiv.classList.add('mb-4', 'p-3', 'rounded-lg', 'bg-gray-50');
        questionFeedbackDiv.innerHTML = `<p class="font-semibold text-gray-700">${index + 1}. ${q.question}</p>`;

        if (selectedOption) {
            if (selectedOption.value === q.answer) {
                score++;
                questionFeedbackDiv.innerHTML += `<p class="correct-answer">Jawaban Anda: ${selectedOption.value} (Benar!)</p>`;
            } else {
                questionFeedbackDiv.innerHTML += `<p class="wrong-answer">Jawaban Anda: ${selectedOption.value} (Salah)</p>`;
                questionFeedbackDiv.innerHTML += `<p class="correct-answer">Jawaban Benar: ${q.answer}</p>`;
            }
        } else {
            questionFeedbackDiv.innerHTML += `<p class="wrong-answer">Anda tidak menjawab soal ini.</p>`;
            questionFeedbackDiv.innerHTML += `<p class="correct-answer">Jawaban Benar: ${q.answer}</p>`;
        }
        questionFeedbackDiv.innerHTML += `<p class="explanation">${q.explanation}</p>`;
        feedbackSection.appendChild(questionFeedbackDiv);
    });

    // Check fill-in-the-blank answers
    fillInTheBlankQuestions.forEach((q, index) => {
        const userAnswer = document.getElementById(`fib-${index}`).value.trim();
        const questionFeedbackDiv = document.createElement('div');
        questionFeedbackDiv.classList.add('mb-4', 'p-3', 'rounded-lg', 'bg-gray-50');
        questionFeedbackDiv.innerHTML = `<p class="font-semibold text-gray-700">${multipleChoiceQuestions.length + index + 1}. ${q.question}</p>`;

        // Case-insensitive comparison
        if (userAnswer.toLowerCase() === q.answer.toLowerCase()) {
            score++;
            questionFeedbackDiv.innerHTML += `<p class="correct-answer">Jawaban Anda: ${userAnswer} (Benar!)</p>`;
        } else {
            questionFeedbackDiv.innerHTML += `<p class="wrong-answer">Jawaban Anda: ${userAnswer || '(Tidak dijawab)'} (Salah)</p>`;
            questionFeedbackDiv.innerHTML += `<p class="correct-answer">Jawaban Benar: ${q.answer}</p>`;
        }
        questionFeedbackDiv.innerHTML += `<p class="explanation">${q.explanation}</p>`;
        feedbackSection.appendChild(questionFeedbackDiv);
    });

    const totalQuestions = multipleChoiceQuestions.length + fillInTheBlankQuestions.length;
    scoreDisplay.textContent = `Anda mendapatkan ${score} dari ${totalQuestions} poin.`;
    resultsSection.style.display = 'block'; // Show results
    resultsSection.scrollIntoView({ behavior: 'smooth' }); // Scroll to results
});
