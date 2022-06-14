# AUTO GENERATED FILE - DO NOT EDIT

export text

"""
    text(;kwargs...)
    text(children::Any;kwargs...)
    text(children_maker::Function;kwargs...)


A Text component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.
Keyword arguments:
- `children` (Array; optional)
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `style` (Dict; optional)
"""
function text(; kwargs...)
        available_props = Symbol[:children, :id, :style]
        wild_props = Symbol[]
        return Component("text", "Text", "dash_react_pdf", available_props, wild_props; kwargs...)
end

text(children::Any; kwargs...) = text(;kwargs..., children = children)
text(children_maker::Function; kwargs...) = text(children_maker(); kwargs...)

