
module DashReactPdf
using Dash

const resources_path = realpath(joinpath( @__DIR__, "..", "deps"))
const version = "0.0.1"

include("jl/document.jl")
include("jl/page.jl")
include("jl/text.jl")
include("jl/text.jl")
include("jl/text.jl")
include("jl/view.jl")

function __init__()
    DashBase.register_package(
        DashBase.ResourcePkg(
            "dash_react_pdf",
            resources_path,
            version = version,
            [
                DashBase.Resource(
    relative_package_path = "async-DashReactPdf.js",
    external_url = "https://unpkg.com/dash_react_pdf@0.0.1/dash_react_pdf/async-DashReactPdf.js",
    dynamic = nothing,
    async = :true,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-DashReactPdf.js.map",
    external_url = "https://unpkg.com/dash_react_pdf@0.0.1/dash_react_pdf/async-DashReactPdf.js.map",
    dynamic = true,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "dash_react_pdf.min.js",
    external_url = "https://unpkg.com/dash_react_pdf@0.0.1/dash_react_pdf/dash_react_pdf.min.js",
    dynamic = nothing,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "dash_react_pdf.min.js.map",
    external_url = "https://unpkg.com/dash_react_pdf@0.0.1/dash_react_pdf/dash_react_pdf.min.js.map",
    dynamic = true,
    async = nothing,
    type = :js
)
            ]
        )

    )
end
end
