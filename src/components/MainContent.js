import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const MainContent = () => {
  const [copySuccess, setCopySuccess] = useState('');

  const copyToClipboard = (text, buttonId) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopySuccess(buttonId);
      setTimeout(() => {
        setCopySuccess('');
      }, 2000); // Reset after 2 seconds
    });
  };

  const codeSnippet1 = 'cp .env.template .env';
  const codeSnippet2 = 'ngrok http 3000';
  const codeSnippet3 = 'docker build -t vocode-telephony-app .';
  const codeSnippet4 = 'docker-compose up';
  const codeSnippet5 = 'poetry install';
  const codeSnippet6 = 'brew services start redis';
  const codeSnippet7 = 'docker run -dp 6379:6379 -it redis/redis-stack:latest';
  const codeSnippet8 = 'poetry run uvicorn main:app --port 3000';

  return (
    <main className="main-content">
      <section>
        <h1 className="main-header">Working with phone calls</h1>
        <p>How to use agents with inbound and outbound phone calls.</p>
        <h2 className="sub-header">Overview</h2>
        <p>
          Vocode supports using agents with inbound and outbound phone calls. Users can <a href="#">create their own agents</a> and use them to fulfill a variety of use cases like information collection, appointment scheduling, sales, customer support, and more.
        </p>
        <h2 className="sub-header">Requirements</h2>
        <ol>
          <li>Ngrok (used to host the <code>TelephonyServer</code> locally)</li>
          <li>ffmpeg a. If you have Homebrew installed, run <code>brew install ffmpeg</code></li>
          <li>Redis a. If you have Homebrew installed, run <code>brew install redis</code></li>
          <li>(optional) Docker</li>
        </ol>
        <h2 className="sub-header">Environments</h2>
        <ol>
          <li>
            Copy the <code>.env.template</code> file and fill in the values of your API keys. You'll need to get API keys for:
            <ul>
              <li>Deepgram (for speech transcription)</li>
              <li>OpenAI (for the underlying agent)</li>
              <li>Azure (for speech synthesis)</li>
              <li>Twilio (for telephony)</li>
            </ul>
            <div style={{ position: 'relative' }}>
              <SyntaxHighlighter language="bash" style={materialDark}>
                {codeSnippet1}
              </SyntaxHighlighter>
              <button
                className={`copy-button ${copySuccess === 'code1' ? 'copied' : ''}`}
                onClick={() => copyToClipboard(codeSnippet1, 'code1')}
              >
                {copySuccess === 'code1' ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </li>
          <li>
            Set up hosting so that Twilio can hit your server. An easy way to do this is <code>ngrok</code>; in our code we set it up to be running on port 3000, run:
            <div style={{ position: 'relative' }}>
              <SyntaxHighlighter language="bash" style={materialDark}>
                {codeSnippet2}
              </SyntaxHighlighter>
              <button
                className={`copy-button ${copySuccess === 'code2' ? 'copied' : ''}`}
                onClick={() => copyToClipboard(codeSnippet2, 'code2')}
              >
                {copySuccess === 'code2' ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </li>
        </ol>
        <h2 className="sub-header">Telephony Server</h2>
        <p>
          The <code>TelephonyServer</code> is–as implied by the name–a server that is responsible for receiving and making phone calls. The server is built using FastAPI and utilizes Twilio for telephony services.
        </p>
        <p>Clone the Vocode repo or copy the Telephony app directory.</p>
        <h2 className="sub-header">Running the server</h2>
        <p>Pick one of these two ways to run the server:</p>
        <h3 className="sub-header">Option 1: Run everything with Docker</h3>
        <ol>
          <li>
            Build the telephony app Docker image. From the <code>telephony_app</code> directory, run:
            <div style={{ position: 'relative' }}>
              <SyntaxHighlighter language="bash" style={materialDark}>
                {codeSnippet3}
              </SyntaxHighlighter>
              <button
                className={`copy-button ${copySuccess === 'code3' ? 'copied' : ''}`}
                onClick={() => copyToClipboard(codeSnippet3, 'code3')}
              >
                {copySuccess === 'code3' ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </li>
          <li>
            Run the application using docker-compose. From the <code>telephony_app</code> directory, run:
            <div style={{ position: 'relative' }}>
              <SyntaxHighlighter language="bash" style={materialDark}>
                {codeSnippet4}
              </SyntaxHighlighter>
              <button
                className={`copy-button ${copySuccess === 'code4' ? 'copied' : ''}`}
                onClick={() => copyToClipboard(codeSnippet4, 'code4')}
              >
                {copySuccess === 'code4' ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </li>
        </ol>
        <h3 className="sub-header">Option 2: Run Python directly</h3>
        <ol>
          <li>Run the following steps from the <code>telephony_app</code> directory.</li>
          <li>Install Poetry and install dependencies.
            <div style={{ position: 'relative' }}>
              <SyntaxHighlighter language="bash" style={materialDark}>
                {codeSnippet5}
              </SyntaxHighlighter>
              <button
                className={`copy-button ${copySuccess === 'code5' ? 'copied' : ''}`}
                onClick={() => copyToClipboard(codeSnippet5, 'code5')}
              >
                {copySuccess === 'code5' ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </li>
          <li>Run Redis with the default port of 6379. For example, using Homebrew:
            <div style={{ position: 'relative' }}>
              <SyntaxHighlighter language="bash" style={materialDark}>
                {codeSnippet6}
              </SyntaxHighlighter>
              <button
                className={`copy-button ${copySuccess === 'code6' ? 'copied' : ''}`}
                onClick={() => copyToClipboard(codeSnippet6, 'code6')}
              >
                {copySuccess === 'code6' ? 'Copied!' : 'Copy'}
              </button>
            </div>
            Or if you prefer to use Docker for this part:
            <div style={{ position: 'relative' }}>
              <SyntaxHighlighter language="bash" style={materialDark}>
                {codeSnippet7}
              </SyntaxHighlighter>
              <button
                className={`copy-button ${copySuccess === 'code7' ? 'copied' : ''}`}
                onClick={() => copyToClipboard(codeSnippet7, 'code7')}
              >
                {copySuccess === 'code7' ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </li>
          <li>Run the server with uvicorn (should be already installed in step 1).
            <div style={{ position: 'relative' }}>
              <SyntaxHighlighter language="bash" style={materialDark}>
                {codeSnippet8}
              </SyntaxHighlighter>
              <button
                className={`copy-button ${copySuccess === 'code8' ? 'copied' : ''}`}
                onClick={() => copyToClipboard(codeSnippet8, 'code8')}
              >
                {copySuccess === 'code8' ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </li>
        </ol>
        <h2 className="sub-header">Setting up an inbound number</h2>
        <ol>
          <li>Create a Twilio account</li>
          <li>Once inside your dashboard, go to Phone Numbers → Manage → Buy a number to get a phone number.</li>
          <li>Then, go to Phone Numbers → Manage → Active Numbers and select the number you want to set up.</li>
          <li>Update the config to point the Webhook URL to <code>https://&lt;YOUR BASE URL&gt;/inbound_call</code> - if you’re using ngrok, it looks like <code>https://asdf1234.ngrok.app/inbound_call</code></li>
          <li>Hit Save and call the number!</li>
        </ol>
        <h2 className="sub-header">Executing outbound calls</h2>
        <p>Make sure the server we just set up is already running. Then, in <code>outbound_call.py</code>:</p>
        <ol>
          <li>Replace the <code>to_phone</code> with the number you want to call and the <code>from_phone</code> with the number you want to call from. In order to make a call from the <code>from_phone</code>, you must have access to it via Twilio (either a number purchased via Twilio or verify the caller ID).</li>
          <li>Run the script with:
            <div style={{ position: 'relative' }}>
              <SyntaxHighlighter language="bash" style={materialDark}>
                {`poetry run python outbound_call.py`}
              </SyntaxHighlighter>
              <button
                className={`copy-button ${copySuccess === 'code9' ? 'copied' : ''}`}
                onClick={() => copyToClipboard(`poetry run python outbound_call.py`, 'code9')}
              >
                {copySuccess === 'code9' ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </li>
        </ol>
        <h2 className="sub-header">Configuration</h2>
        <p>Both the <code>OutboundCall</code> (in <code>outbound_call.py</code>) and <code>InboundCallConfig</code> (in <code>telephony_app.py</code>) classes can accept a <code>TranscriberConfig</code>, <code>AgentConfig</code>, or <code>SynthesizerConfig</code> - the default transcriber is Deepgram and the default synthesizer is Azure.</p>
        <p>This example sets up an agent that spells every word that is sent to it - any text-in, text-out function can be turned into a voice conversation by subclassing <code>BaseAgent</code> and creating an <code>AgentFactory</code>.</p>
        <div style={{ position: 'relative' }}>
          <SyntaxHighlighter language="python" style={materialDark}>
            {`import typing
from typing import Optional, Tuple

from vocode.streaming.agent.abstract_factory import AbstractAgentFactory
from vocode.streaming.agent.base_agent import BaseAgent, RespondAgent
from vocode.streaming.agent.chat_gpt_agent import ChatGPTAgent
from vocode.streaming.models.agent import AgentConfig, AgentType, ChatGPTAgentConfig

class SpellerAgentConfig(AgentConfig, type="agent_speller"):
    pass

class SpellerAgent(RespondAgent[SpellerAgentConfig]):
    async def respond(
        self,
        human_input: str,
        conversation_id: str,
        is_interrupt: bool = False,
    ) -> Tuple[Optional[str], bool]:
        return "".join(c + " " for c in human_input), False

class SpellerAgentFactory(AbstractAgentFactory):
    def create_agent(self, agent_config: AgentConfig) -> BaseAgent:
        if isinstance(agent_config, ChatGPTAgentConfig):
            return ChatGPTAgent(agent_config=agent_config)
        elif isinstance(agent_config, SpellerAgentConfig):
            return SpellerAgent(agent_config=agent_config)
        else:
            raise Exception("Invalid agent config")`}
          </SyntaxHighlighter>
          <button
            className={`copy-button ${copySuccess === 'code10' ? 'copied' : ''}`}
            onClick={() => copyToClipboard(`import typing\nfrom typing import Optional, Tuple\n\nfrom vocode.streaming.agent.abstract_factory import AbstractAgentFactory\nfrom vocode.streaming.agent.base_agent import BaseAgent, RespondAgent\nfrom vocode.streaming.agent.chat_gpt_agent import ChatGPTAgent\nfrom vocode.streaming.models.agent import AgentConfig, AgentType, ChatGPTAgentConfig\n\nclass SpellerAgentConfig(AgentConfig, type="agent_speller"):\n    pass\n\nclass SpellerAgent(RespondAgent[SpellerAgentConfig]):\n    async def respond(\n        self,\n        human_input: str,\n        conversation_id: str,\n        is_interrupt: bool = False,\n    ) -> Tuple[Optional[str], bool]:\n        return "".join(c + " " for c in human_input), False\n\nclass SpellerAgentFactory(AbstractAgentFactory):\n    def create_agent(self, agent_config: AgentConfig) -> BaseAgent:\n        if isinstance(agent_config, ChatGPTAgentConfig):\n            return ChatGPTAgent(agent_config=agent_config)\n        elif isinstance(agent_config, SpellerAgentConfig):\n            return SpellerAgent(agent_config=agent_config)\n        else:\n            raise Exception("Invalid agent config")`, 'code10')}
          >
            {copySuccess === 'code10' ? 'Copied!' : 'Copy'}
          </button>
        </div>
        <p>An <code>AgentFactory</code> instance is passed into the <code>TelephonyServer</code> in <code>telephony_app.py</code>.</p>
        <p>We provide a small set of agents with already created <code>AgentConfigs</code>, including, importantly, one that sets up ChatGPT with a configured prompt: see our Python Quickstart for more info.</p>
        <h2 className="sub-header">Accessing call information in your agent</h2>
        <p>We store the <code>to</code> and <code>from</code> numbers in the <code>ConfigManager</code> - so if you’d like to access them in your agent, you can instantiate the manager to hook into the same Redis instance:</p>
        <div style={{ position: 'relative' }}>
          <SyntaxHighlighter language="python" style={materialDark}>
            {`class SpellerAgent(BaseAgent):
    def __init__(self, agent_config: SpellerAgentConfig):
        super().__init__(agent_config=agent_config)
        self.config_manager = RedisConfigManager()

    async def respond(
        self,
        human_input: str,
        conversation_id: str,
        is_interrupt: bool = False,
    ) -> Tuple[Optional[str], bool]:
        call_config = self.config_manager.get_config(conversation_id)
        if call_config is not None:
            from_phone = call_config.twilio_from
            to_phone = call_config.twilio_to
        return "".join(c + " " for c in human input), False`}
          </SyntaxHighlighter>
          <button
            className={`copy-button ${copySuccess === 'code11' ? 'copied' : ''}`}
            onClick={() => copyToClipboard(`class SpellerAgent(BaseAgent):\n    def __init__(self, agent_config: SpellerAgentConfig):\n        super().__init__(agent_config=agent_config)\n        self.config_manager = RedisConfigManager()\n\n    async def respond(\n        self,\n        human_input: str,\n        conversation_id: str,\n        is_interrupt: bool = False,\n    ) -> Tuple[Optional[str], bool]:\n        call_config = self.config_manager.get_config(conversation_id)\n        if call_config is not none:\n            from_phone = call_config.twilio_from\n            to_phone = call_config.twilio_to\n        return "".join(c + " " for c in human_input), False`, 'code11')}
          >
            {copySuccess === 'code11' ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </section>
    </main>
  );
};

export default MainContent;
