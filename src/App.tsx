import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Img from './components/Img.tsx'
import Eye_closed from './components/icons/Eye_closed.tsx'
import Briefcase_with_spiceworks_logo from './components/icons/Briefcase_with_spiceworks_logo.tsx'
import ChevronMenuButton from './components/ChevronMenuButton.tsx'
import IconButton from './components/IconButton.tsx'
import SaveButton from './components/SaveButton.tsx'
import SettingsSection from './components/SettingsSection.tsx'
import NotificationSection from './components/NotificationSection.tsx'
import FooterBar from './components/FooterBar.tsx'
import SwSiBadgeDivider from './components/SwSiBadgeDivider.tsx'
import HiddenTextarea from './components/HiddenTextarea.tsx'
import CrispClient from './components/CrispClient.tsx'
import GlobalNavbar from './components/GlobalNavbar.tsx'
import AIWriterSettingsLayout from './components/AIWriterSettingsLayout.tsx'
import SectionHeader from './components/SectionHeader.tsx'
import AISettingsPanel from './components/AISettingsPanel.tsx'

import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';

function AppContent() {
    const location = useLocation();
    const [activeTab, setActiveTab] = React.useState("AI Writer");

    return (
        <body className={"flex flex-col h-full min-h-full bg-white dark:bg-gray-950"}>
        <plasmo-csui id={"plasmo-inspector"}>
        <template shadowrootmode={"open"}>
        <div id={"plasmo-shadow-container"} style={{zIndex:"2147483647", position:"relative"}}>
        <div id={"plasmo-overlay-0"} className={"plasmo-csui-container"} style={{display:"flex", position:"absolute", top:"0px", left:"0px"}}></div>
        </div>
        </template>
        </plasmo-csui>
        <div id={"app"} className={"flex flex-col h-full min-h-full relative"}>
        <div id={"menu-overlay"} className={"fixed inset-0 bg-black opacity-50 hidden z-40 sf-hidden"}></div>
        <header className={"flex flex-wrap sm:justify-start sm:flex-nowrap w-full text-sm bg-white dark:bg-gray-950"}>
        
                <GlobalNavbar />
            
        </header>
        <main id={"content"} role={"main"} className={"max-h-full overflow-auto rounded-lg max-w-screen mx-auto flex w-full flex-1 px-2 pb-2"}>
        <div className={"w-full border border-gray-950/10 rounded-lg bg-gray-50/50 p-0 dark:border-gray-700 dark:bg-gray-900"}>
        <div className={"h-full flex flex-col"}>
        <div className={"flex flex-shrink-0 items-center justify-between border-b border-gray-200 p-2 dark:border-gray-700"}>
        <div>
        <div className={"flex items-center gap-2"}>
        <h1 className={"text-base font-medium pl-2"}>
        cost-estimator-1
        </h1>
        
                <ChevronMenuButton />
            
        </div>
        </div>
        <div className={"flex items-center gap-2"}>
        
                    <IconButton
                        className={"justify-center whitespace-nowrap font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border bg-background shadow-xs hover:text-accent-foreground rounded-md px-3 flex h-9 cursor-pointer items-center gap-2 border-blue-200 text-sm transition-colors text-blue-600 hover:bg-blue-50"}
                        icon={<Eye_closed />}
                        label="Test template with real jobs"
                    />
                
        <SaveButton />
        </div>
        </div>
        <div className={"flex h-full w-full flex-grow flex-col gap-6 overflow-hidden rounded-b-lg bg-white px-4 lg:flex-row"}>
        <div className={"fixed top-0 left-0 z-50 hidden h-full w-3/4 space-y-4 overflow-y-auto bg-white py-2 shadow-lg lg:relative lg:z-auto lg:block lg:h-auto lg:w-56 lg:border-gray-200 lg:bg-transparent lg:py-4 lg:shadow-none xl:w-72 dark:bg-gray-900 lg:dark:border-gray-700 shrink-0"}>
        
                    <SettingsSection title="General" dataId="0" activeTab={activeTab} onTabChange={setActiveTab} />


                    <SettingsSection title="Advanced" dataId="1" activeTab={activeTab} onTabChange={setActiveTab} />
                
        </div>
        <div className={"flex flex-1 flex-col"}>
        {activeTab === "AI Writer" && (
                <AIWriterSettingsLayout
                    title="AI Writer"
                    description="Configure how AI writes and personalizes your proposals"
                />
        )}
        {activeTab === "AI Settings" && (
                <div className={"flex-1 flex-grow overflow-auto"}>
                    <div className={"flex h-full"}>
                        <div className={"relative flex flex-1 w-full min-w-0 overflow-hidden"}>
                            <div className={"grid grid-cols-1 w-full gap-6"}>
                                <div className={"flex-1 min-w-0 space-y-4 overflow-y-auto py-4"}>
                                    <SectionHeader
                                        title="AI Settings"
                                        description="Fine-tune AI model selection and parameters for optimal proposal generation."
                                    />
                                    <AISettingsPanel />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )}
        </div>
        </div>
        <NotificationSection />
        </div>
        </div>
        </main>
        <FooterBar />
        </div>
        <div id={"hs-modal-upgrade-to-agency"} className={"hs-overlay hidden size-full fixed top-0 start-0 z-80 overflow-x-hidden overflow-y-auto sf-hidden"}></div>
        <div id={"sw-si-extension-host"}>
        <template shadowrootmode={"open"}>
        <iframe id={"sw-si-extension"} sandbox={"allow-popups allow-top-navigation-by-user-activation"} src="/frames/a4f52f05-606c-45de-9795-93765227e66a/index.html"></iframe>
        <div id={"sw-si-badge"} style={{top:"805px"}}>
        <div style={{width:"24px", height:"22px", display:"flex"}}>
        <Briefcase_with_spiceworks_logo />
        </div>
        <div id={"sw-si-badge-drag-container"}>
        <SwSiBadgeDivider />
        <Img id="1" />
        </div>
        </div>
        </template>
        </div>
        <div className={"PostHogSurvey-019666b6-dd0a-0000-6071-11b40f06f63c"} style={{"--ph-survey-font-family":"system-ui,BlinkMacSystemFont,\"Inter\",\"Segoe UI\",\"Roboto\",Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"", "--ph-survey-box-padding":"20px 24px", "--ph-survey-max-width":"300px", "--ph-survey-z-index":"2147483645", "--ph-survey-border-color":"#c9c6c6", "--ph-survey-border-bottom":"none", "--ph-survey-border-radius":"10px 10px 0 0", "--ph-survey-background-color":"#eeeded", "--ph-survey-box-shadow":"0 4px 12px rgba(0,0,0,0.15)", "--ph-survey-disabled-button-opacity":"0.6", "--ph-survey-submit-button-color":"black", "--ph-survey-submit-button-text-color":"white", "--ph-survey-rating-bg-color":"white", "--ph-survey-rating-active-bg-color":"black", "--ph-survey-rating-active-text-color":"white", "--ph-survey-text-primary-color":"#020617", "--ph-survey-text-subtle-color":"#939393", "--ph-widget-color":"black", "--ph-widget-text-color":"white", "--ph-widget-z-index":"2147483645", "--ph-survey-input-background":"white", "--ph-survey-input-text-color":"#020617", "--ph-survey-rating-text-color":"#020617", "--ph-survey-scrollbar-thumb-color":"var(--ph-survey-border-color)", "--ph-survey-scrollbar-track-color":"var(--ph-survey-background-color)", "--ph-survey-outline-color":"rgba(59,130,246,0.8)"}}>
        <template shadowrootmode={"open"}></template>
        </div>
        <div id={"my-extension-root"} className={"my-extension-root"} style={{width:"100vw", height:"1px", position:"fixed", top:"0px", left:"0px", zIndex:"2147483641", display:"none"}}></div>
        <div></div>
        <div id={"give-freely-root-mbnbehikldjhnfehhnaidhjhoofhpehk"} className={"give-freely-root"} style={{display:"block"}}>
        <template shadowrootmode={"open"}>
        <div>
        <div className={"gf-app"}></div>
        </div>
        </template>
        </div>
        <veepn-lock-screen>
        <template shadowrootmode={"open"}></template>
        </veepn-lock-screen>
        <HiddenTextarea />
        <div className={"tox tox-silver-sink tox-tinymce-aux"} style={{position:"relative"}}></div>
        
                <CrispClient />
            
        </body>
    );
}

function App() {
    const defaultRoute = "/dashboard/proposal-templates/edit/22847";

    return (
        <Router>
            <Routes>
                {defaultRoute !== '/' && <Route path="/" element={<Navigate to={defaultRoute} replace />} />}
                <Route path="*" element={<AppContent />} />
            </Routes>
        </Router>
    );
}

export default App
