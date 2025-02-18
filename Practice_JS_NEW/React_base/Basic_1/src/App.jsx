import './App.css'

import { Header } from './components/Header/Header'
import { TeachingSection } from './components/TeachingSection.jsx'
import DifferencesSection from './components/DifferencesSection.jsx'
import { IntroSection } from './components/introSection.jsx'
import TabsSection from './components/TabsSection.jsx'
import { FeedbackSection } from './components/FeedbackSection.jsx'
import { useState } from 'react'


function App() {
  const [tab, setTab] = useState('feedback');

  return (
    <>
      <Header />
      <main>
        <IntroSection />
        <TabsSection active={tab} onChange={(current) => setTab(current)} />

        {tab === 'main' &&
          <>
            <TeachingSection />
            <DifferencesSection />
          </>
        }
        {tab === 'feedback' &&
          <FeedbackSection />
        }
      </main>
    </>
  )
}

export default App
