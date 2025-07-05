
import { useState } from 'react';
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { Progress } from "./components/ui/progress";
import { ChevronLeft, ChevronRight, Sparkles, Users, Heart, Star } from 'lucide-react';
import { cn } from "./lib/utils";

interface QuizData {
  occasion: string[];
  bodyType: string;
  skinTone: string;
  budget: string;
  colors: string[];
}

const InitialisationFrom = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [quizData, setQuizData] = useState<QuizData>({
    occasion: [],
    bodyType: '',
    skinTone: '',
    budget: '',
    colors: []
  });

  const totalSteps = 5;
  const progress = (currentStep / totalSteps) * 100;

  const updateQuizData = (field: keyof QuizData, value: any) => {
    setQuizData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps - 1) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentStep(prev => prev + 1);
        setIsTransitioning(false);
      }, 200);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentStep(prev => prev - 1);
        setIsTransitioning(false);
      }, 200);
    }
  };

  if (!showQuiz) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
        {/* Navigation */}
        <nav className="px-6 py-4 flex justify-between items-center backdrop-blur-sm bg-white/40 border-b border-orange-100/50">
          <div className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
            StyleAI
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-orange-800/70 hover:text-orange-900 transition-colors duration-300">How it works</a>
            <a href="#about" className="text-orange-800/70 hover:text-orange-900 transition-colors duration-300">About</a>
            <Button variant="outline" className="border-orange-200 text-orange-800 hover:bg-orange-50">Sign In</Button>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-white/70 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-orange-200/50 shadow-lg">
              <Sparkles className="w-5 h-5 text-amber-600 mr-3" />
              <span className="text-sm font-medium text-orange-800">AI-Powered Personal Styling</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-orange-800 via-amber-600 to-yellow-600 bg-clip-text text-transparent">
                Your Perfect Style,
              </span>
              <br />
              <span className="text-orange-900">Curated by AI</span>
            </h1>
            
            <p className="text-xl text-orange-700/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              Take our personalized style quiz and let our AI stylist create the perfect outfits tailored to your unique preferences, lifestyle, and body type.
            </p>
            
            <Button 
              onClick={() => setShowQuiz(true)}
              size="lg" 
              className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-10 py-6 text-lg rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-500 border-0"
            >
              Start Your Style Journey
              <ChevronRight className="ml-3 w-6 h-6" />
            </Button>
          </div>
        </div>

        {/* Features */}
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm hover:bg-white/90 group">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-amber-400 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-orange-900">Personalized for You</h3>
                <p className="text-orange-700/70">Our AI learns your unique style preferences, body type, and lifestyle to create perfect outfit recommendations.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm hover:bg-white/90 group">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-yellow-400 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-orange-900">Love Guarantee</h3>
                <p className="text-orange-700/70">Not happy with your selections? Our AI learns from your feedback to improve future recommendations.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm hover:bg-white/90 group">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-orange-900">Expert Curation</h3>
                <p className="text-orange-700/70">Every recommendation is backed by fashion expertise and current trends, ensuring you always look your best.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* Quiz Header */}
      <div className="bg-white/90 backdrop-blur-sm border-b border-orange-100/50 sticky top-0 z-50 shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between mb-6">
            <div className="text-xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              StyleAI Quiz
            </div>
            <div className="text-sm text-orange-600/70 font-medium">
              Step {currentStep + 1} of {totalSteps}
            </div>
          </div>
          <Progress value={progress} className="h-3 bg-orange-100" />
        </div>
      </div>

      {/* Quiz Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className={cn(
          "min-h-[500px] flex items-center justify-center transition-all duration-500 ease-out",
          isTransitioning ? "opacity-0 transform translate-y-8 scale-95" : "opacity-100 transform translate-y-0 scale-100"
        )}>
          {currentStep === 0 && <OccasionStep quizData={quizData} updateQuizData={updateQuizData} />}
          {currentStep === 1 && <BodyTypeStep quizData={quizData} updateQuizData={updateQuizData} />}
          {currentStep === 2 && <SkinToneStep quizData={quizData} updateQuizData={updateQuizData} />}
          {currentStep === 3 && <BudgetStep quizData={quizData} updateQuizData={updateQuizData} />}
          {currentStep === 4 && <ColorPreferenceStep quizData={quizData} updateQuizData={updateQuizData} />}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12">
          <Button
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 0}
            className="flex items-center border-orange-200 text-orange-700 hover:bg-orange-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>

          {currentStep < totalSteps - 1 ? (
            <Button
              onClick={nextStep}
              className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 flex items-center shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Next
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button
              onClick={() => {
                setShowQuiz(false);
                setCurrentStep(0);
              }}
              className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              See Results
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

// Occasion Step
const OccasionStep = ({ quizData, updateQuizData }: { quizData: QuizData, updateQuizData: Function }) => {
  const occasions = [
    { name: 'Work & Professional', desc: 'Office meetings, presentations, formal work events' },
    { name: 'Casual & Everyday', desc: 'Daily wear, running errands, relaxed outings' },
    { name: 'Date Night', desc: 'Romantic dinners, special evenings out' },
    { name: 'Party & Events', desc: 'Celebrations, social gatherings, parties' },
    { name: 'Travel & Vacation', desc: 'Comfortable yet stylish travel outfits' },
    { name: 'Fitness & Active', desc: 'Gym, yoga, outdoor activities' },
    { name: 'Wedding & Formal', desc: 'Weddings, galas, formal ceremonies' },
    { name: 'Weekend Vibes', desc: 'Brunch, shopping, casual hangouts' }
  ];

  const toggleOccasion = (occasion: string) => {
    const currentOccasions = quizData.occasion;
    if (currentOccasions.includes(occasion)) {
      updateQuizData('occasion', currentOccasions.filter(o => o !== occasion));
    } else {
      updateQuizData('occasion', [...currentOccasions, occasion]);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto animate-fade-in">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-orange-900">What occasions are you shopping for?</h2>
        <p className="text-xl text-orange-700/80">Select all that apply - we'll curate looks for each</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {occasions.map((occasion) => (
          <Card
            key={occasion.name}
            className={cn(
              "cursor-pointer transition-all duration-300 hover:scale-105 border-2 hover:shadow-lg group",
              quizData.occasion.includes(occasion.name)
                ? "border-orange-400 bg-gradient-to-br from-orange-50 to-amber-50 shadow-lg"
                : "border-orange-200/50 hover:border-orange-300 bg-white/80 backdrop-blur-sm"
            )}
            onClick={() => toggleOccasion(occasion.name)}
          >
            <CardContent className="p-6">
              <h3 className={cn(
                "font-semibold text-lg mb-2 transition-colors duration-300",
                quizData.occasion.includes(occasion.name) ? "text-orange-800" : "text-orange-700 group-hover:text-orange-800"
              )}>{occasion.name}</h3>
              <p className="text-sm text-orange-600/70">{occasion.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

// Body Type Step
const BodyTypeStep = ({ quizData, updateQuizData }: { quizData: QuizData, updateQuizData: Function }) => {
  const [hoveredType, setHoveredType] = useState<string | null>(null);
  
  const bodyTypes = [
    { 
      name: 'Pear', 
      description: 'Hips wider than shoulders',
      tip: 'Highlight your upper body with statement tops and structured shoulders'
    },
    { 
      name: 'Apple', 
      description: 'Fuller midsection, narrow hips',
      tip: 'Draw attention to your legs and décolletage with A-line silhouettes'
    },
    { 
      name: 'Hourglass', 
      description: 'Balanced shoulders and hips',
      tip: 'Emphasize your waist with fitted styles and belted pieces'
    },
    { 
      name: 'Rectangle', 
      description: 'Similar measurements throughout',
      tip: 'Create curves with layering, textures, and waist-defining pieces'
    },
    { 
      name: 'Inverted Triangle', 
      description: 'Shoulders wider than hips',
      tip: 'Balance your silhouette with wider-leg pants and A-line skirts'
    }
  ];

  const getBodyTypeSVG = (type: string) => {
    const svgProps = "width='80' height='120' viewBox='0 0 80 120' fill='none' xmlns='http://www.w3.org/2000/svg'";
    
    switch(type) {
      case 'Pear':
        return `<svg ${svgProps}><path d='M25 20 C25 15, 35 15, 40 15 C45 15, 55 15, 55 20 L55 40 C55 45, 50 50, 45 55 L50 60 C55 65, 60 70, 65 80 L65 100 C65 105, 60 110, 55 110 L25 110 C20 110, 15 105, 15 100 L15 80 C20 70, 25 65, 30 60 L35 55 C30 50, 25 45, 25 40 Z' stroke='currentColor' stroke-width='2' fill='rgba(251, 146, 60, 0.1)'/></svg>`;
      case 'Apple':
        return `<svg ${svgProps}><path d='M30 20 C30 15, 35 15, 40 15 C45 15, 50 15, 50 20 L50 40 C55 45, 60 50, 60 60 L60 70 C60 75, 55 80, 50 80 L45 85 C50 90, 50 95, 50 100 L50 110 L30 110 L30 100 C30 95, 30 90, 35 85 L30 80 C25 80, 20 75, 20 70 L20 60 C20 50, 25 45, 30 40 Z' stroke='currentColor' stroke-width='2' fill='rgba(251, 146, 60, 0.1)'/></svg>`;
      case 'Hourglass':
        return `<svg ${svgProps}><path d='M25 20 C25 15, 35 15, 40 15 C45 15, 55 15, 55 20 L55 40 C55 45, 50 50, 45 55 L40 60 L45 65 C50 70, 55 75, 55 80 L55 100 C55 105, 50 110, 45 110 L35 110 C30 110, 25 105, 25 100 L25 80 C25 75, 30 70, 35 65 L40 60 L35 55 C30 50, 25 45, 25 40 Z' stroke='currentColor' stroke-width='2' fill='rgba(251, 146, 60, 0.1)'/></svg>`;
      case 'Rectangle':
        return `<svg ${svgProps}><path d='M30 20 C30 15, 35 15, 40 15 C45 15, 50 15, 50 20 L50 40 C50 45, 50 50, 50 55 L50 65 C50 70, 50 75, 50 80 L50 100 C50 105, 45 110, 40 110 L40 110 C35 110, 30 105, 30 100 L30 80 C30 75, 30 70, 30 65 L30 55 C30 50, 30 45, 30 40 Z' stroke='currentColor' stroke-width='2' fill='rgba(251, 146, 60, 0.1)'/></svg>`;
      case 'Inverted Triangle':
        return `<svg ${svgProps}><path d='M20 20 C20 15, 25 15, 40 15 C55 15, 60 15, 60 20 L60 40 C60 45, 55 50, 50 55 L45 60 C50 65, 50 70, 50 80 L50 100 C50 105, 45 110, 40 110 L40 110 C35 110, 30 105, 30 100 L30 80 C30 70, 30 65, 35 60 L30 55 C25 50, 20 45, 20 40 Z' stroke='currentColor' stroke-width='2' fill='rgba(251, 146, 60, 0.1)'/></svg>`;
      default:
        return `<svg ${svgProps}><circle cx='40' cy='60' r='30' stroke='currentColor' stroke-width='2' fill='rgba(251, 146, 60, 0.1)'/></svg>`;
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto animate-fade-in">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-orange-900">What's your body type?</h2>
        <p className="text-xl text-orange-700/80">This helps us recommend the most flattering fits</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {bodyTypes.map((type) => (
          <Card
            key={type.name}
            className={cn(
              "cursor-pointer transition-all duration-300 hover:scale-105 border-2 hover:shadow-lg group relative",
              quizData.bodyType === type.name
                ? "border-orange-400 bg-gradient-to-br from-orange-50 to-amber-50 shadow-lg"
                : "border-orange-200/50 hover:border-orange-300 bg-white/80 backdrop-blur-sm"
            )}
            onClick={() => updateQuizData('bodyType', type.name)}
            onMouseEnter={() => setHoveredType(type.name)}
            onMouseLeave={() => setHoveredType(null)}
          >
            <CardContent className="p-6 text-center">
              <div className="flex justify-center mb-4 text-orange-600">
                <div dangerouslySetInnerHTML={{ __html: getBodyTypeSVG(type.name) }} />
              </div>
              <h3 className={cn(
                "font-semibold text-lg mb-2 transition-colors duration-300",
                quizData.bodyType === type.name ? "text-orange-800" : "text-orange-700 group-hover:text-orange-800"
              )}>{type.name}</h3>
              <p className="text-xs text-orange-600/70 mb-2">{type.description}</p>
            </CardContent>
            
            {/* Hover Tooltip */}
            {hoveredType === type.name && (
              <div className="absolute bottom-full left-1/2 transform-translate-x-1/2 mb-2 p-3 bg-orange-800 text-white text-sm rounded-lg shadow-lg z-10 w-64 transition-all duration-300 animate-fade-in">
                <div className="font-medium mb-1">Styling Tip:</div>
                <div>{type.tip}</div>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-orange-800"></div>
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
};

// Skin Tone Step
const SkinToneStep = ({ quizData, updateQuizData }: { quizData: QuizData, updateQuizData: Function }) => {
  const skinTones = [
    { name: 'Fair', color: '#fdbcb4' },
    { name: 'Light', color: '#edb98a' },
    { name: 'Medium Light', color: '#fd9853' },
    { name: 'Medium', color: '#e35d29' },
    { name: 'Medium Dark', color: '#c4623b' },
    { name: 'Dark', color: '#8b5a2b' },
    { name: 'Very Dark', color: '#5d4037' },
    { name: 'Deep', color: '#3e2723' }
  ];

  return (
    <div className="w-full max-w-3xl mx-auto animate-fade-in">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-orange-900">What's your skin tone?</h2>
        <p className="text-xl text-orange-700/80">This helps us suggest colors that complement you best</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {skinTones.map((tone) => (
          <Card
            key={tone.name}
            className={cn(
              "cursor-pointer transition-all duration-300 hover:scale-105 border-2 hover:shadow-lg group",
              quizData.skinTone === tone.name
                ? "border-orange-400 shadow-lg bg-orange-50 ring-2 ring-orange-200"
                : "border-orange-200/50 hover:border-orange-300 bg-white/80"
            )}
            onClick={() => updateQuizData('skinTone', tone.name)}
          >
            <CardContent className="p-6 text-center">
              <div 
                className="w-16 h-16 rounded-full mb-4 mx-auto border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: tone.color }}
              />
              <h3 className={cn(
                "font-semibold text-lg transition-colors duration-300",
                quizData.skinTone === tone.name ? "text-orange-800" : "text-orange-700 group-hover:text-orange-800"
              )}>{tone.name}</h3>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

// Budget Step (unchanged)
const BudgetStep = ({ quizData, updateQuizData }: { quizData: QuizData, updateQuizData: Function }) => {
  const budgets = ['Under $50', '$50-$100', '$100-$200', '$200-$500', '$500+'];

  return (
    <div className="w-full max-w-3xl mx-auto animate-fade-in">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-orange-900">What's your budget?</h2>
        <p className="text-xl text-orange-700/80">Per item, so we can find options that work for you</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {budgets.map((budget) => (
          <Card
            key={budget}
            className={cn(
              "cursor-pointer transition-all duration-300 hover:scale-105 border-2 hover:shadow-lg group",
              quizData.budget === budget
                ? "border-orange-400 bg-gradient-to-br from-orange-50 to-amber-50 shadow-lg"
                : "border-orange-200/50 hover:border-orange-300 bg-white/80 backdrop-blur-sm"
            )}
            onClick={() => updateQuizData('budget', budget)}
          >
            <CardContent className="p-8 text-center">
              <h3 className={cn(
                "font-semibold text-xl transition-colors duration-300",
                quizData.budget === budget ? "text-orange-800" : "text-orange-700 group-hover:text-orange-800"
              )}>{budget}</h3>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

// Enhanced Color Preference Step
const ColorPreferenceStep = ({ quizData, updateQuizData }: { quizData: QuizData, updateQuizData: Function }) => {
  const colorPalettes = [
    {
      name: 'Neutrals',
      colors: [
        { name: 'Ivory', value: '#f8f5f0' },
        { name: 'Beige', value: '#f5f5dc' },
        { name: 'Taupe', value: '#b8a99a' },
        { name: 'Charcoal', value: '#36454f' }
      ]
    },
    {
      name: 'Earth Tones',
      colors: [
        { name: 'Terracotta', value: '#e2725b' },
        { name: 'Rust', value: '#b7410e' },
        { name: 'Olive', value: '#8f9779' },
        { name: 'Sage', value: '#9caf88' }
      ]
    },
    {
      name: 'Cool Tones',
      colors: [
        { name: 'Navy', value: '#001f3f' },
        { name: 'Teal', value: '#008080' },
        { name: 'Lavender', value: '#e6e6fa' },
        { name: 'Steel Blue', value: '#4682b4' }
      ]
    },
    {
      name: 'Warm Tones',
      colors: [
        { name: 'Coral', value: '#ff7f50' },
        { name: 'Golden', value: '#ffd700' },
        { name: 'Burgundy', value: '#800020' },
        { name: 'Mustard', value: '#ffdb58' }
      ]
    },
    {
      name: 'Bold & Bright',
      colors: [
        { name: 'Emerald', value: '#50c878' },
        { name: 'Royal Blue', value: '#4169e1' },
        { name: 'Crimson', value: '#dc143c' },
        { name: 'Fuchsia', value: '#ff00ff' }
      ]
    }
  ];

  const toggleColor = (color: string) => {
    const currentColors = quizData.colors;
    if (currentColors.includes(color)) {
      updateQuizData('colors', currentColors.filter(c => c !== color));
    } else {
      updateQuizData('colors', [...currentColors, color]);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto animate-fade-in">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-orange-900">Choose your color palette</h2>
        <p className="text-xl text-orange-700/80">Select colors that make you feel confident and beautiful</p>
      </div>

      <div className="space-y-8">
        {colorPalettes.map((palette) => (
          <div key={palette.name} className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-orange-100/50">
            <h3 className="text-lg font-semibold text-orange-800 mb-4">{palette.name}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {palette.colors.map((color) => (
                <div
                  key={color.name}
                  className={cn(
                    "cursor-pointer transition-all duration-300 hover:scale-105 rounded-xl p-4 border-2 group",
                    quizData.colors.includes(color.name)
                      ? "border-orange-400 shadow-lg bg-orange-50 ring-2 ring-orange-200"
                      : "border-orange-200/30 hover:border-orange-300 bg-white/80"
                  )}
                  onClick={() => toggleColor(color.name)}
                >
                  <div className="flex items-center space-x-3">
                    <div 
                      className="w-8 h-8 rounded-full border-2 border-white shadow-md group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: color.value }}
                    />
                    <span className={cn(
                      "font-medium transition-colors duration-300",
                      quizData.colors.includes(color.name) ? "text-orange-800" : "text-orange-700 group-hover:text-orange-800"
                    )}>
                      {color.name}
                    </span>
                  </div>
                  {quizData.colors.includes(color.name) && (
                    <div className="mt-2 flex justify-end">
                      <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InitialisationFrom;