import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const NewPage = () => {
  const [copySuccess, setCopySuccess] = useState('');

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
      <section>
        <h1 className="main-header">Create your own AI Agent</h1>
        <p>How to create a custom Agent for your use case.</p>
        <h2 className="sub-header">Agent type</h2>
        <p>
          Each agent has a unique agent type string that is checked in various parts of Vocode, most notably in the factories that create agents. So, you must create a new type for your custom agent. See the <code>AgentType</code> enum in <code>vocode/streaming/models/agent.py</code> for examples. For our <code>BrokenRecordAgent</code>, we will use “agent_broken_record” as our type.
        </p>
        <h2 className="sub-header">Agent config</h2>
        <p>
          Your agent must have a corresponding agent config that is a subclass of <code>AgentConfig</code> and is <a href="#">JSON-serializable</a>. Serialization is automatically handled by <a href="#">Pydantic</a>.
        </p>
        <p>
          The agent config should only contain the information you need to deterministically create the same agent each time. This means with the same parameters in your config, the corresponding agent should have the same behavior each time you create it.
        </p>
        <p>For our <code>BrokenRecordAgent</code>, we create a config like:</p>
        <div style={{ position: 'relative' }}>
          <SyntaxHighlighter language="python" style={materialDark}>
            {`from vocode.streaming.models.agent import AgentConfig

class BrokenRecordAgentConfig(AgentConfig, type="agent_broken_record"):
    message: str # The message we will always return`}
          </SyntaxHighlighter>
          <button
            className={`copy-button ${copySuccess === 'code1' ? 'copied' : ''}`}
            onClick={() => copyToClipboard(`from vocode.streaming.models.agent import AgentConfig

class BrokenRecordAgentConfig(AgentConfig, type="agent_broken_record"):
    message: str # The message we will always return`, 'code1')}
          >
            {copySuccess === 'code1' ? 'Copied!' : 'Copy'}
          </button>
        </div>
        <h2 className="sub-header">Custom Agent</h2>
        <p>
          Now, you can create your custom agent subclass of <code>RespondAgent</code>. In your class header, pass in <code>RespondAgent</code> with your agent type as a type hint. This should look like <code>RespondAgent[Your_Agent_Type]</code>.
        </p>
        <p>
          Each agent should override the <code>generate_response()</code> async method to support streaming and <code>respond()</code> method to support turn-based conversations.
        </p>
        <p>
          If you want to only support turn-based conversations, you do not have to overwrite <code>generate_response()</code> but you MUST set <code>generate_response=False</code> in your agent config (see <code>ChatVertexAIAgentConfig</code> in <code>vocode/streaming/models/agent.py</code> for an example). Otherwise, you must ALWAYS implement the <code>generate_response()</code> async method.
        </p>
        <p>
          The <code>generate_response()</code> method returns an <code>AsyncGenerator</code> of tuples containing each message/sentence and a boolean for whether that message can be interrupted by the human speaking. You can automatically create this generator by yielding instead of returning (see example below).
        </p>
        <p>We will now define our <code>BrokenRecordAgent</code>. Since we simply return the same message each time, we can return and yield that message in <code>respond()</code> and <code>generate_response()</code>, respectively:</p>
        <div style={{ position: 'relative' }}>
          <SyntaxHighlighter language="python" style={materialDark}>
            {`class BrokenRecordAgent(RespondAgent[BrokenRecordAgentConfig]):
    def respond(
        self,
        human_input: str,
        is_interrupt: bool = False,
    ) -> tuple[Optional[str], bool]:
        return self.agent_config.message

    async def generate_response(
        self,
        human_input: str,
        is_interrupt: bool = False,
    ) -> AsyncGenerator[Tuple[str, bool], None]:
        yield self.agent_config.message, False`}
          </SyntaxHighlighter>
          <button
            className={`copy-button ${copySuccess === 'code2' ? 'copied' : ''}`}
            onClick={() => copyToClipboard(`class BrokenRecordAgent(RespondAgent[BrokenRecordAgentConfig]):
    def respond(
        self,
        human_input: str,
        is_interrupt: bool = False,
    ) -> tuple[Optional[str], bool]:
        return self.agent_config.message

    async def generate_response(
        self,
        human_input: str,
        is_interrupt: bool = False,
    ) -> AsyncGenerator[Tuple[str, bool], None]:
        yield self.agent_config.message, False`, 'code2')}
          >
            {copySuccess === 'code2' ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </section>
    </main>
  );
};

export default NewPage;
