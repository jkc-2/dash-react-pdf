# AUTO GENERATED FILE - DO NOT EDIT

export dashreactpdf

"""
    dashreactpdf(;kwargs...)
    dashreactpdf(children::Any;kwargs...)
    dashreactpdf(children_maker::Function;kwargs...)


A DashReactPdf component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.
Keyword arguments:
- `children` (Array; optional)
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
"""
function dashreactpdf(; kwargs...)
        available_props = Symbol[:children, :id]
        wild_props = Symbol[]
        return Component("dashreactpdf", "DashReactPdf", "dash_react_pdf", available_props, wild_props; kwargs...)
end

dashreactpdf(children::Any; kwargs...) = dashreactpdf(;kwargs..., children = children)
dashreactpdf(children_maker::Function; kwargs...) = dashreactpdf(children_maker(); kwargs...)

