# AUTO GENERATED FILE - DO NOT EDIT

export document

"""
    document(;kwargs...)
    document(children::Any;kwargs...)
    document(children_maker::Function;kwargs...)


A Document component.
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
function document(; kwargs...)
        available_props = Symbol[:children, :id, :style]
        wild_props = Symbol[]
        return Component("document", "Document", "dash_react_pdf", available_props, wild_props; kwargs...)
end

document(children::Any; kwargs...) = document(;kwargs..., children = children)
document(children_maker::Function; kwargs...) = document(children_maker(); kwargs...)

