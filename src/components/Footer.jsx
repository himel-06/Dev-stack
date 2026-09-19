function Footer() {
  return (
    <footer id="contact" className="border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 pt-12">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
          {/* brand */}
          <div id="about" className="col-span-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-linear-to-br from-purple-600 to-pink-500 text-white text-xs font-bold flex items-center justify-center">
                DS
              </div>
              <span className="text-xl font-semibold">
                Dev <span className="text-pink-600">Stack</span>
              </span>
            </div>
            <p className="text-sm text-gray-500 mt-4 max-w-sm">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            <div className="flex gap-4 mt-6 text-sm">
              <a href="https://github.com" target="_blank">GitHub</a>
              <a href="https://twitter.com" target="_blank">Twitter</a>
              <a href="https://linkedin.com" target="_blank">LinkedIn</a>
            </div>
          </div>

          <div id="projects">
            <h4 className="text-xs font-bold uppercase mb-4">Product</h4>
            <ul className="flex flex-col gap-3 text-sm text-gray-500">
              <li><a href="#home">Home</a></li>
              <li><a href="#technologies">Technologies</a></li>
              <li><a href="#projects">Projects</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase mb-4">Company</h4>
            <ul className="flex flex-col gap-3 text-sm text-gray-500">
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase mb-4">Legal</h4>
            <ul className="flex flex-col gap-3 text-sm text-gray-500">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 border-t border-gray-200 mt-12 py-6 text-sm text-gray-400">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
