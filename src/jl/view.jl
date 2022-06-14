# AUTO GENERATED FILE - DO NOT EDIT

export view

"""
    view(;kwargs...)
    view(children::Any;kwargs...)
    view(children_maker::Function;kwargs...)


A View component.

Keyword arguments:
- `children` (Array; optional)
- `id` (String; optional)
- `style` (Dict; optional)
"""
function view(; kwargs...)
        available_props = Symbol[:children, :id, :style]
        wild_props = Symbol[]
        return Component("view", "View", "dash_react_pdf", available_props, wild_props; kwargs...)
end

view(children::Any; kwargs...) = view(;kwargs..., children = children)
view(children_maker::Function; kwargs...) = view(children_maker(); kwargs...)

