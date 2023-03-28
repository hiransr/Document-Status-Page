import React from 'react'

const TableContents = () => {
    return (
        <div>
            <table class="table-fixed border-collapse border border-slate-900 mt-[50px] font-serif right">
                <thead>
                    <tr>
                        <th class="border border-slate-900">Song</th>
                        <th class="border border-slate-900">Artist</th>
                        <th class="border border-slate-900">Year</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="border border-slate-900">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                        <td class="border border-slate-900">Malcolm Lockyer</td>
                        <td class="border border-slate-900">1961</td>
                    </tr>
                    <tr>
                        <td class="border border-slate-900">Witchy Woman</td>
                        <td class="border border-slate-900">The Eagles</td>
                        <td class="border border-slate-900">1972</td>
                    </tr>
                    <tr>
                        <td class="border border-slate-900">Shining Star</td>
                        <td class="border border-slate-900">Earth, Wind, and Fire</td>
                        <td class="border border-slate-900">1975</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TableContents