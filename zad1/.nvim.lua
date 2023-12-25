-- harpoon those registers
local registers = {
	old = {},
	new = {
		["p"] = ":e app/page.tsx\n",
		["l"] = ":e app/login.jsx\n",
	}
}

for reg, file in pairs(registers.new) do
	registers.old[reg] = vim.fn.getreg(reg)
	vim.fn.setreg(reg, file)
end

vim.api.nvim_create_autocmd("VimLeavePre", {
	once = false,
	callback = function()
		for reg, content in pairs(registers.old) do
			vim.fn.setreg(reg, content)
		end
	end
})
