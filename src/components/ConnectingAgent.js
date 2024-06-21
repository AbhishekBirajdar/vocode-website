import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const ConnectingAgent = () => {
  const [copySuccess, setCopySuccess] = useState('');

  const codeString1 = `
from vocode.streaming.agent.abstract_factory import AbstractAgentFactory
from vocode.streaming.action.my_action_factory import MyActionFactory

class MyAgentFactory(AbstractAgentFactory):
    def __init__(self, action_factory: MyActionFactory):
        self.action_factory = action_factory

    def create_agent(
        self, agent_config: AgentConfig, logger: Optional[logging.Logger] = None
    ) -> BaseAgent:
        if agent_config.type == "MY_ACTION":
            return MyActionAgent(
                agent_config=agent_config,
                action_factory=self.action_factory
            )
        elif agent_config.type == "other_agent_type":
            ...
        else:
            raise Exception("Invalid agent config")
  `;

  const codeString2 = `
from vocode.streaming.telephony.server_base import TelephonyServer
from vocode.streaming.agent.my_agent_factory import MyAgentFactory
from vocode.streaming.action.my_action_factory import MyActionFactory

telephony_server = TelephonyServer(
    agent_factory=MyAgentFactory(action_factory=MyActionFactory())
    ...
)
  `;

  const copyToClipboard = (text, buttonId) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopySuccess(buttonId);
      setTimeout(() => {
        setCopySuccess('');
      }, 2000); // Reset after 2 seconds
    });
  };

  return (
    <main className="main-content">
      <h1 className="main-header">Connecting Your Agent</h1>
      <p>How to link a custom agent to your app.</p>
      <h2 className="sub-header">Agent Factories</h2>
      <p>
        Agent factories specify which agents are available to your app. In order to connect an agent to your app, you must first define an agent factory. To do so, subclass the <code>AbstractAgentFactory</code> class to specify how agents are created. Here you can import and use your own custom agents.
      </p>
      <h2 className="sub-header">Example</h2>
      <p>First define your <code>AgentFactory</code>. In this example, we are creating a factory for a new type of agent called MyActionAgent:</p>
      <div style={{ position: 'relative' }}>
        <SyntaxHighlighter language="python" style={materialDark}>
          {codeString1}
        </SyntaxHighlighter>
        <button
          className={`copy-button ${copySuccess === 'code1' ? 'copied' : ''}`}
          onClick={() => copyToClipboard(codeString1, 'code1')}
        >
          {copySuccess === 'code1' ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <p>Then, in your app, you can connect the agent to the app:</p>
      <div style={{ position: 'relative' }}>
        <SyntaxHighlighter language="python" style={materialDark}>
          {codeString2}
        </SyntaxHighlighter>
        <button
          className={`copy-button ${copySuccess === 'code2' ? 'copied' : ''}`}
          onClick={() => copyToClipboard(codeString2, 'code2')}
        >
          {copySuccess === 'code2' ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </main>
  );
};

export default ConnectingAgent;
