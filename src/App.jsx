import { useState } from 'react'; //react hook

import { CORE_CONCEPTS, EXAMPLES } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';

function App() {
  const [ selectedTopic, setSelectedTopic ] = useState();

  function handleSelect(selectedButton){
        setSelectedTopic(selectedButton);
        console.log(selectedTopic);
    }

  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          {CORE_CONCEPTS.map((conceptItem) => <CoreConcept key={conceptItem.title} {...conceptItem}/>)}
          {/* <CoreConcept title={CORE_CONCEPTS[0].title} 
          description={CORE_CONCEPTS[0].description} 
          image={CORE_CONCEPTS[0].image}/>
          <CoreConcept {... CORE_CONCEPTS[1]}/>
          <CoreConcept {... CORE_CONCEPTS[2]}/>
          <CoreConcept {... CORE_CONCEPTS[3]}/> */}
        </ul>
        </section>
        <section id="examples">
          <h2>Example</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>Component</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
            {/* <TabButton label="Components" />
            <TabButton label="JSX" />
            <TabButton label="Props" />
            <TabButton label="State" /> */}
          </menu>
          {!selectedTopic ? (<p>Please select a topic.</p>) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div> 
          )}

        </section>
      </main>
    </div>
  );
}

export default App;
