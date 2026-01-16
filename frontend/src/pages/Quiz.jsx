import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '../components/ui/button';
import { quizQuestions } from '../data/mock';
import { Progress } from '../components/ui/progress';
import { CheckCircle2, XCircle, RotateCcw, Trophy, ChevronRight } from 'lucide-react';

const Quiz = () => {
  const { t, language } = useLanguage();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [isStarted, setIsStarted] = useState(false);

  const handleAnswer = (answerIndex) => {
    const newAnswers = [...selectedAnswers, answerIndex];
    setSelectedAnswers(newAnswers);

    if (currentQuestion < quizQuestions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
      }, 500);
    } else {
      setTimeout(() => {
        setShowResults(true);
      }, 500);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    quizQuestions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctIndex) {
        correct++;
      }
    });
    return correct;
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setIsStarted(false);
  };

  const getLevel = (score) => {
    const percentage = (score / quizQuestions.length) * 100;
    if (percentage >= 80) return { level: language === 'az' ? 'Əla' : 'Excellent', color: '#b4dc19' };
    if (percentage >= 60) return { level: language === 'az' ? 'Yaxşı' : 'Good', color: '#5f9dff' };
    if (percentage >= 40) return { level: language === 'az' ? 'Orta' : 'Average', color: '#fad24b' };
    return { level: language === 'az' ? 'Başlanğıc' : 'Beginner', color: '#ff8c19' };
  };

  // Start Screen
  if (!isStarted) {
    return (
      <main className="pt-24 min-h-screen">
        <section className="section-padding">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-20 h-20 bg-brand-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Trophy className="w-10 h-10 text-brand-accent" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4">
                {t.quiz.title}
              </h1>
              <p className="text-xl text-brand-muted mb-8">{t.quiz.subtitle}</p>
              <div className="bg-white rounded-xl p-6 border border-brand-border mb-8">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-brand-dark">
                      {quizQuestions.length}
                    </div>
                    <div className="text-sm text-brand-muted">{t.quiz.questions}</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-brand-dark">~3</div>
                    <div className="text-sm text-brand-muted">
                      {language === 'az' ? 'dəqiqə' : 'minutes'}
                    </div>
                  </div>
                </div>
              </div>
              <Button
                size="lg"
                className="bg-brand-primary hover:bg-brand-primary/90 px-10"
                onClick={() => setIsStarted(true)}
              >
                {t.quiz.start}
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </section>
      </main>
    );
  }

  // Results Screen
  if (showResults) {
    const score = calculateScore();
    const { level, color } = getLevel(score);
    const percentage = (score / quizQuestions.length) * 100;

    return (
      <main className="pt-24 min-h-screen">
        <section className="section-padding">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <div
                className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: `${color}20` }}
              >
                <Trophy className="w-12 h-12" style={{ color }} />
              </div>
              <h2 className="text-3xl font-bold text-brand-dark mb-2">
                {t.quiz.result}
              </h2>
              <p className="text-xl text-brand-muted mb-8">
                {language === 'az' ? 'Səviyyəniz:' : 'Your level:'}{' '}
                <span className="font-bold" style={{ color }}>
                  {level}
                </span>
              </p>

              <div className="bg-white rounded-xl p-8 border border-brand-border mb-8">
                <div className="text-6xl font-bold text-brand-dark mb-2">
                  {score}/{quizQuestions.length}
                </div>
                <Progress value={percentage} className="h-3 mb-4" />
                <p className="text-brand-muted">
                  {language === 'az'
                    ? `${Math.round(percentage)}% düzgün cavab`
                    : `${Math.round(percentage)}% correct answers`}
                </p>
              </div>

              {/* Review Answers */}
              <div className="space-y-4 mb-8 text-left">
                {quizQuestions.map((q, idx) => {
                  const isCorrect = selectedAnswers[idx] === q.correctIndex;
                  return (
                    <div
                      key={q.id}
                      className={`p-4 rounded-lg border ${
                        isCorrect
                          ? 'bg-[#b4dc19]/10 border-[#b4dc19]/30'
                          : 'bg-red-50 border-red-200'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        {isCorrect ? (
                          <CheckCircle2 className="w-5 h-5 text-[#b4dc19] mt-0.5" />
                        ) : (
                          <XCircle className="w-5 h-5 text-red-500 mt-0.5" />
                        )}
                        <div>
                          <p className="font-medium text-brand-dark text-sm">
                            {language === 'az' ? q.questionAz : q.questionEn}
                          </p>
                          {!isCorrect && (
                            <p className="text-xs text-brand-muted mt-1">
                              {language === 'az' ? 'Düzgün cavab: ' : 'Correct answer: '}
                              {language === 'az'
                                ? q.options[q.correctIndex].az
                                : q.options[q.correctIndex].en}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <Button
                size="lg"
                variant="outline"
                className="border-brand-border"
                onClick={resetQuiz}
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                {language === 'az' ? 'Yenidən cəhd et' : 'Try again'}
              </Button>
            </div>
          </div>
        </section>
      </main>
    );
  }

  // Quiz Screen
  const question = quizQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  return (
    <main className="pt-24 min-h-screen">
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto">
            {/* Progress */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-brand-muted">
                  {language === 'az' ? 'Sual' : 'Question'} {currentQuestion + 1}/
                  {quizQuestions.length}
                </span>
                <span className="text-sm font-medium text-brand-accent">
                  {Math.round(progress)}%
                </span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            {/* Question */}
            <div className="bg-white rounded-2xl p-8 border border-brand-border">
              <h2 className="text-xl md:text-2xl font-bold text-brand-dark mb-8">
                {language === 'az' ? question.questionAz : question.questionEn}
              </h2>

              <div className="space-y-3">
                {question.options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(idx)}
                    disabled={selectedAnswers.length > currentQuestion}
                    className={`w-full text-left p-4 rounded-xl border transition-all ${
                      selectedAnswers[currentQuestion] === idx
                        ? idx === question.correctIndex
                          ? 'bg-[#b4dc19]/20 border-[#b4dc19] text-brand-dark'
                          : 'bg-red-50 border-red-300 text-brand-dark'
                        : 'bg-brand-light border-brand-border hover:border-brand-primary text-brand-dark'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                          selectedAnswers[currentQuestion] === idx
                            ? idx === question.correctIndex
                              ? 'bg-[#b4dc19] text-white'
                              : 'bg-red-500 text-white'
                            : 'bg-white text-brand-muted'
                        }`}
                      >
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span>{language === 'az' ? option.az : option.en}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Quiz;