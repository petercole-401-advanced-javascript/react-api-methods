<h1 id="lab---props-and-state">LAB 28 - Props and State</h1>

<p>Put your knowledge of state, component hierarchy, and <code class="language-plaintext highlighter-rouge">fetch()</code> together to create an API testing application, similar to Postman, called “RESTy”</p>

<h2 id="before-you-begin">Before you begin</h2>

<p>Refer to <em>Getting Started</em>  in the <a href="/code-401-javascript-guide/reference/submission-instructions/labs/">lab submission instructions</a> for complete setup, configuration, deployment, and submission instructions.</p>

<h2 id="getting-started">Getting Started</h2>

<p>Open <a href="http://codesandbox.io">Code Sandbox</a> and Create a new application titled with your course code and this lab number (i.e. js-401n15-class-10)</p>

<p>You will be submitting the URL to this working sandbox as part of your assignment.</p>

<h2 id="requirements">Requirements</h2>

<p>Using the tools that we’ve demonstrated in the core demo, start to build out the RESTy app, which is a simple clone of Postman.</p>

<ul>
  <li>User enters an API URL</li>
  <li>Chooses a REST Method</li>
  <li>Clicks the  “Go” button</li>
  <li>Application fetches data from the URL given, with the method specified</li>
  <li>Displays the response headers and results separately</li>
  <li>Both headers and results should be “pretty printed” JSON</li>
</ul>

<blockquote>
  <p>One possible design/layout. Please use your judgement and taste in styling your version of this application.</p>
</blockquote>

<p><img src="resty.png" width="600" /></p>

<h3 id="implementation-details">Implementation Details</h3>

<ul>
  <li><code class="language-plaintext highlighter-rouge">index.js</code> - Entry Point</li>
  <li><code class="language-plaintext highlighter-rouge">app.js</code> - Container
    <ul>
      <li>Holds state: Count and Results Array</li>
      <li>A class method that can update state</li>
      <li>Renders 2 Child Components</li>
    </ul>
  </li>
  <li><code class="language-plaintext highlighter-rouge">&lt;Form /&gt;</code>
    <ul>
      <li>Expects a function to be sent to it as a prop</li>
      <li>Renders a URL entry form</li>
      <li>A selection of REST methods to choose from (“get” should be the default)</li>
      <li>On submit
        <ul>
          <li>Send the API results back to the <code class="language-plaintext highlighter-rouge">&lt;App&gt;</code> using the method sent down in props</li>
        </ul>
      </li>
    </ul>
  </li>
  <li><code class="language-plaintext highlighter-rouge">&lt;Results /&gt;</code>
    <ul>
      <li>Expects the count, headers, results to be sent in as props</li>
      <li>Renders the count</li>
      <li>Renders the Result Headers as “pretty” JSON</li>
      <li>Renders the Result Body as “pretty” JSON</li>
    </ul>
  </li>
</ul>

<h2 id="tests">Tests</h2>

<p>Write mount/enzyme tests for end to end testing</p>

<h2 id="stretch-goal">Stretch Goal</h2>

<ul>
  <li>Add a “loading” indicator or icon in the Headers/Results area when the user submits the form</li>
  <li>Replace it with the results when they come in</li>
</ul>
