# AUTO GENERATED FILE - DO NOT EDIT

export page

"""
    page(;kwargs...)
    page(children::Any;kwargs...)
    page(children_maker::Function;kwargs...)


A Page component.

Keyword arguments:
- `children` (Array; optional)
- `id` (String; optional)
- `size` (String; optional)
- `style` (Dict; optional)
"""
function page(; kwargs...)
        available_props = Symbol[:children, :id, :size, :style]
        wild_props = Symbol[]
        return Component("page", "Page", "dash_react_pdf", available_props, wild_props; kwargs...)
end

page(children::Any; kwargs...) = page(;kwargs..., children = children)
page(children_maker::Function; kwargs...) = page(children_maker(); kwargs...)

