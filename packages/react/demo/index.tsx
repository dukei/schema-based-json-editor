import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { JSONEditor } from '../dist/'
import { schema, initialValue, propertiesSchema, propertiesInitialValue, theme, icon, addAllCssLinks } from 'schema-based-json-editor/demo/'
import dragula from 'dragula'
import MarkdownIt from 'markdown-it'
import hljs from 'highlight.js'
import * as monaco from 'monaco-editor'
addAllCssLinks('../../core/demo/css/')

class Main extends React.Component<unknown, unknown> {
  private locale = null
  private schema = schema
  private initialValue = initialValue
  private isValid = false
  private propertiesSchema = propertiesSchema
  private propertiesInitialValue = propertiesInitialValue
  UNSAFE_componentWillMount() {
    if (navigator.language === 'zh-CN') {
      import('../../core/dist/locales/' + navigator.language + '.js').then(module => {
        this.locale = module.locale
        this.setState({ locale: this.locale })
      })
    }
  }
  render() {
    const valueHtml = hljs.highlight('json', JSON.stringify(this.initialValue, null, '  ')).value
    return (
      <div style={{ position: 'relative' }}>
        <a href='https://github.com/plantain-00/schema-based-json-editor/tree/master/packages/react/demo' target='_blank'>the source code of the demo</a>
        <br />
        <div style={{ margin: '10px', width: '30%', position: 'fixed', height: '100%', overflowY: 'scroll' }} className='bootstrap3-row-container'>
          <JSONEditor schema={this.propertiesSchema}
            initialValue={this.propertiesInitialValue}
            updateValue={this.updatePropertiesValue}
            theme={theme}
            icon={icon}
            locale={this.locale}
            dragula={dragula}
            markdownit={MarkdownIt}
            readonly={true}
            hljs={hljs}
            monacoEditor={monaco.editor} />
        </div>
        <div style={{ width: '35%', margin: '10px', position: 'absolute', left: '31%' }} className='bootstrap3-row-container'>
          <JSONEditor schema={this.schema}
            initialValue={this.initialValue}
            updateValue={this.updateValue}
            theme={theme}
            icon={icon}
            locale={this.locale}
            dragula={dragula}
            markdownit={MarkdownIt}
            hljs={hljs}
            monacoEditor={monaco.editor} />
        </div>
        <div style={{ margin: '10px', width: '30%', position: 'fixed', right: '10px', height: '100%', overflowY: 'scroll' }}>
          Value
          <button onClick={() => {
            this.propertiesInitialValue.initialValue = JSON.parse(document.getElementById("code")!.innerText);
            this.updatePropertiesValue(this.propertiesInitialValue, true);
          }}>Save</button>&nbsp;
          <button onClick={() => {navigator.clipboard.writeText(document.getElementById("code")!.innerText)}}>Copy</button>:
          <pre id="code" style={{ borderColor: this.isValid ? 'black' : 'red' }}><code dangerouslySetInnerHTML={{ __html: valueHtml }}></code></pre>
        </div>
      </div>
    )
  }
  private updatePropertiesValue = (value: any, _isValid: boolean) => {
    try {
      localStorage.setItem('json-editor:properties', JSON.stringify(value))
    } catch (error: unknown) {
      console.log(error)
    }
  }

  private static timerIdUpdateValue = 0;

  private updateValue = (value: any, isValid: boolean) => {
    if(Main.timerIdUpdateValue)
      clearTimeout(Main.timerIdUpdateValue);

    Main.timerIdUpdateValue = window.setTimeout(() => {
      this.initialValue = value
      this.isValid = isValid
      this.setState({ initialValue: this.initialValue });
      Main.timerIdUpdateValue = 0;
    }, 1000)

  }
}

ReactDOM.render(<Main />, document.getElementById('container'))
