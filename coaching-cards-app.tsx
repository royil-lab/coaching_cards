import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";

// Card data
const cardData = {
  "צמיחה והתפתחות": [
    "היום אני בוחרת לצמוח מתוך אהבה ולא מתוך פחד. משימה: זהי תחום שבו את מונעת מפחד והחליפי אותו באהבה",
    "כל אתגר הוא הזדמנות ללמידה. מה האתגר מנסה ללמד אותי היום?",
    "הדרך שלי ייחודית כמוני. אני מתקדמת בקצב המתאים לי",
    "כל יום מביא איתו הזדמנות חדשה לצמיחה. מה ההזדמנות של היום?",
    "הטעויות שלי הן המורות הטובות ביותר שלי. משימה: כתבי 3 דברים שלמדת מטעות אחרונה"
  ],
  "העצמה ואומץ": [
    "האומץ שלי גדול מהפחדים שלי. משימה: עשי היום משהו שמפחיד אותך במעט",
    "אני בוחרת להאמין בעצמי, גם כשזה מאתגר",
    "הכוח שלי טמון בייחודיות שלי. משימה: רשמי 5 תכונות ייחודיות שלך",
    "אני ראויה להצלחה ולאושר. זו האמת שלי",
    "הגבולות שלי הם המגן שלי. אני מציבה אותם באהבה"
  ],
  "חלומות ומטרות": [
    "החלומות שלי הם המצפן שלי. משימה: כתבי חלום אחד שהיית רוצה להגשים השנה",
    "אני יוצרת את המציאות שלי צעד אחר צעד",
    "המטרות שלי ברות השגה כשאני מפרקת אותן לצעדים קטנים",
    "אני מרשה לעצמי לחלום בגדול. הכל אפשרי",
    "הדרך להגשמה מתחילה בחלום. מה החלום שלי?"
  ],
  "מודעות ותובנות": [
    "אני מקשיבה לחוכמה הפנימית שלי. מה היא אומרת לי עכשיו?",
    "התשובות נמצאות בתוכי. משימה: הקדישי 5 דקות להקשבה פנימית",
    "אני מודעת לרגשות שלי ומכבדת אותם",
    "המחשבות שלי יוצרות את המציאות שלי. אני בוחרת מחשבות מקדמות",
    "אני לומדת להכיר את עצמי מחדש בכל יום"
  ],
  "יצירתיות והשראה": [
    "היצירתיות שלי היא מעיין בלתי נדלה. משימה: צרי משהו היום - ציור, שיר, רעיון חדש",
    "אני פתוחה לרעיונות חדשים ואפשרויות חדשות",
    "ההשראה נמצאת בכל מקום. מה מעורר בי השראה היום?",
    "אני מרשה לעצמי לחקור דרכים חדשות",
    "היופי שסביבי מעורר את היצירתיות שלי"
  ]
};

// CategoryView Component
const CategoryView = ({ onCategorySelect, onRandomCard, setCurrentView }) => {
  return (
    <div className="space-y-4">
      <button
        onClick={onRandomCard}
        className="w-full p-4 bg-purple-600 text-white rounded-lg shadow-md flex items-center justify-center space-x-2"
      >
        <span>קלף אקראי מכל הקטגוריות</span>
      </button>

      {Object.keys(cardData).map((category) => (
        <button
          key={category}
          className="w-full p-4 bg-white rounded-lg shadow-md"
          onClick={() => {
            onCategorySelect(category);
            setCurrentView('card');
          }}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

// CardView Component
const CardView = ({ 
  card,
  isFlipped,
  onBack,
  onNextCard,
  onAddNote,
  onShare,
  note,
  showNoteInput,
  currentNote,
  setCurrentNote,
  saveNote,
  cancelNote
}) => {
  return (
    <div className="space-y-4">
      <button
        onClick={onBack}
        className="mb-4 flex items-center text-purple-600"
      >
        <span>חזרה לקטגוריות</span>
      </button>

      <Card className="w-full bg-gradient-to-b from-purple-100 to-blue-100 shadow-xl rounded-xl p-6">
        <CardContent className="flex flex-col items-center justify-center min-h-[300px] space-y-4">
          <p className="text-lg text-center">{card?.text}</p>
          {note && !showNoteInput && (
            <div className="mt-4 p-2 bg-white/50 rounded-lg">
              <p className="text-sm text-gray-600">הערה שלך: {note}</p>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="flex justify-center space-x-4 mt-4">
        <button
          onClick={onShare}
          className="p-2 rounded-full bg-white shadow-md"
        >
          שיתוף
        </button>

        <button
          onClick={onAddNote}
          className="p-2 rounded-full bg-white shadow-md"
        >
          הוספת הערה
        </button>

        <button
          onClick={onNextCard}
          className="p-2 rounded-full bg-white shadow-md"
        >
          קלף הבא
        </button>
      </div>

      {showNoteInput && (
        <div className="mt-4">
          <textarea
            value={currentNote}
            onChange={(e) => setCurrentNote(e.target.value)}
            className="w-full p-2 rounded-lg border border-purple-200 resize-none"
            placeholder="הוסיפי הערה אישית..."
            rows={3}
          />
          <div className="flex justify-end space-x-2 mt-2">
            <button
              onClick={cancelNote}
              className="px-4 py-2 text-gray-600"
            >
              ביטול
            </button>
            <button
              onClick={saveNote}
              className="px-4 py-2 bg-purple-600 text-white rounded-lg"
            >
              שמירה
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Main App Component
const App = () => {
  const [currentView, setCurrentView] = useState('categories');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentCard, setCurrentCard] = useState(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [notes, setNotes] = useState({});
  const [showNoteInput, setShowNoteInput] = useState(false);
  const [currentNote, setCurrentNote] = useState('');

  const signature = "מיכל שאוליאן לוי - מאמנת לצמיחה והתפתחות אישית";

  useEffect(() => {
    // Load saved data from localStorage
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) setNotes(JSON.parse(savedNotes));
  }, []);

  useEffect(() => {
    // Save data to localStorage
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const pickRandomCard = (category = null) => {
    const categories = Object.keys(cardData);
    const selectedCategory = category || categories[Math.floor(Math.random() * categories.length)];
    const cards = cardData[selectedCategory];
    const card = cards[Math.floor(Math.random() * cards.length)];
    
    setCurrentCard({ category: selectedCategory, text: card });
    setCurrentView('card');
    setIsFlipped(false);
  };

  const shareCard = async () => {
    if (currentCard) {
      try {
        await navigator.share({
          title: 'קלף השראה',
          text: `${currentCard.text}\n\n${signature}`,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    }
  };

  const saveNote = () => {
    if (currentCard && currentNote.trim()) {
      setNotes(prev => ({
        ...prev,
        [currentCard.text]: currentNote
      }));
      setCurrentNote('');
      setShowNoteInput(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-blue-100 p-4">
      <header className="text-center mb-6">
        <h1 className="text-2xl font-bold text-purple-800">קלפי העצמה</h1>
      </header>

      {currentView === 'categories' ? (
        <CategoryView
          onCategorySelect={setSelectedCategory}
          onRandomCard={() => pickRandomCard()}
          setCurrentView={setCurrentView}
        />
      ) : (
        <CardView
          card={currentCard}
          isFlipped={isFlipped}
          onBack={() => setCurrentView('categories')}
          onNextCard={() => pickRandomCard(selectedCategory)}
          onAddNote={() => setShowNoteInput(true)}
          onShare={shareCard}
          note={notes[currentCard?.text]}
          showNoteInput={showNoteInput}
          currentNote={currentNote}
          setCurrentNote={setCurrentNote}
          saveNote={saveNote}
          cancelNote={() => {
            setShowNoteInput(false);
            setCurrentNote('');
          }}
        />
      )}

      <footer className="text-center mt-6 p-4">
        <p className="text-sm text-purple-600">{signature}</p>
      </footer>
    </div>
  );
};

export default App;
