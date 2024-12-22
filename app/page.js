'use client';

import React, { useState, useEffect } from 'react';

// Custom Card components
const Card = ({ className, children }) => (
  <div style={{
    width: '100%',
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '24px',
    ...styleStringToObject(className)
  }}>
    {children}
  </div>
);

const CardContent = ({ className, children }) => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '300px',
    gap: '16px',
    ...styleStringToObject(className)
  }}>
    {children}
  </div>
);

// Helper function to handle className string conversion
const styleStringToObject = (className = '') => {
  const styles = {};
  if (className.includes('bg-gradient-to-b')) {
    styles.background = 'linear-gradient(to bottom, #f3e8ff, #dbeafe)';
  }
  return styles;
};

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
  const buttonStyle = {
    width: '100%',
    padding: '16px',
    borderRadius: '8px',
    border: 'none',
    marginBottom: '16px',
    cursor: 'pointer'
  };

  const randomButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#9333ea',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px'
  };

  const categoryButtonStyle = {
    ...buttonStyle,
    backgroundColor: 'white',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
  };

  return (
    <div>
      <button
        onClick={onRandomCard}
        style={randomButtonStyle}
      >
        <span>קלף אקראי מכל הקטגוריות</span>
      </button>

      {Object.keys(cardData).map((category) => (
        <button
          key={category}
          style={categoryButtonStyle}
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
  const backButtonStyle = {
    marginBottom: '16px',
    display: 'flex',
    alignItems: 'center',
    color: '#9333ea',
    background: 'none',
    border: 'none',
    cursor: 'pointer'
  };

  const actionButtonStyle = {
    padding: '8px',
    borderRadius: '9999px',
    backgroundColor: 'white',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    border: 'none',
    cursor: 'pointer'
  };

  const noteInputStyle = {
    width: '100%',
    padding: '8px',
    borderRadius: '8px',
    border: '1px solid #e5ccff',
    resize: 'none',
    marginTop: '16px'
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <button
        onClick={onBack}
        style={backButtonStyle}
      >
        <span>חזרה לקטגוריות</span>
      </button>

      <Card className="bg-gradient-to-b from-purple-100 to-blue-100">
        <CardContent>
          <p style={{ fontSize: '1.125rem', textAlign: 'center' }}>{card?.text}</p>
          {note && !showNoteInput && (
            <div style={{
              marginTop: '16px',
              padding: '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
              borderRadius: '8px'
            }}>
              <p style={{ fontSize: '0.875rem', color: '#4b5563' }}>הערה שלך: {note}</p>
            </div>
          )}
        </CardContent>
      </Card>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '16px' }}>
        <button
          onClick={onShare}
          style={actionButtonStyle}
        >
          שיתוף
        </button>

        <button
          onClick={onAddNote}
          style={actionButtonStyle}
        >
          הוספת הערה
        </button>

        <button
          onClick={onNextCard}
          style={actionButtonStyle}
        >
          קלף הבא
        </button>
      </div>

      {showNoteInput && (
        <div style={{ marginTop: '16px' }}>
          <textarea
            value={currentNote}
            onChange={(e) => setCurrentNote(e.target.value)}
            style={noteInputStyle}
            placeholder="הוסיפי הערה אישית..."
            rows={3}
          />
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px', marginTop: '8px' }}>
            <button
              onClick={cancelNote}
              style={{ padding: '8px 16px', color: '#4b5563', border: 'none', background: 'none', cursor: 'pointer' }}
            >
              ביטול
            </button>
            <button
              onClick={saveNote}
              style={{
                padding: '8px 16px',
                backgroundColor: '#9333ea',
                color: 'white',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              שמירה
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

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
    if (typeof window !== 'undefined') {
      const savedNotes = localStorage.getItem('notes');
      if (savedNotes) setNotes(JSON.parse(savedNotes));
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('notes', JSON.stringify(notes));
    }
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

  const containerStyle = {
    minHeight: '100vh',
    background: 'linear-gradient(to bottom, #f3e8ff, #dbeafe)',
    padding: '16px'
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '24px'
  };

  const titleStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#6b21a8'
  };

  const footerStyle = {
    textAlign: 'center',
    marginTop: '24px',
    padding: '16px'
  };

  const signatureStyle = {
    fontSize: '0.875rem',
    color: '#9333ea'
  };

  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        <h1 style={titleStyle}>קלפי העצמה</h1>
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

      <footer style={footerStyle}>
        <p style={signatureStyle}>{signature}</p>
      </footer>
    </div>
  );
};

// Export a Home component that uses our App
export default function Home() {
  if (typeof window === 'undefined') {
    return null; // Return null during server-side rendering
  }
  
  return <App />;
}

