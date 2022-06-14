import dash_react_pdf
import dash
from dash.dependencies import Input, Output
import dash_html_components as html

app = dash.Dash(__name__)

app.layout = dash_react_pdf.Document(
        id="document",
        children=[
            dash_react_pdf.Page(
                id="page",
                size="A4",
                style={ "backgroundColor": 'tomato' },
                children=[
                    dash_react_pdf.View(
                        id="view1",
                        children=[
                            dash_react_pdf.Text(
                                id="text1",
                                children=["Text"]
                            )
                        ]
                    ),
                    dash_react_pdf.View(
                        id="view2",
                        style={ "color": 'white', "textAlign": 'center', "margin": 30 },
                        children=[
                            dash_react_pdf.Text(
                                id="text2",
                                children=["Text 2"]
                            )
                        ]
                    ),
                ]
            )
        ]
    )


if __name__ == '__main__':
    app.run_server(debug=True)
