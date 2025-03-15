import { Link } from "wouter";
import { Github, Twitter, Mail, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img
              src="https://www.corbantechnologies.org/_next/image?url=%2FlogoSmNoBg.png&w=384&q=75"
              alt="Corban Technologies"
              className="h-8 w-auto mb-4"
            />
            <p className="text-sm text-gray-600">
              Your trusted partner for software delivery.
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://x.com/corbantechorg?s=21&t=qioLX_Kc2xx1YTgPgDKadA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/corbantechnologies"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="mailto:info@corbantechnologies.org"
                className="text-gray-600 hover:text-primary"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/company/corban-technologies"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-sm text-gray-600 hover:text-gray-900">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-gray-600 hover:text-gray-900">
                  Mobile Development
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-gray-600 hover:text-gray-900">
                  Cyber Security
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-gray-600 hover:text-gray-900">
                  Cloud Services
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/#company" className="text-sm text-gray-600 hover:text-gray-900">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#work" className="text-sm text-gray-600 hover:text-gray-900">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-gray-600 hover:text-gray-900">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-sm text-gray-600 hover:text-gray-900">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="text-sm text-gray-600">
                Email: info@corbantechnologies.org
              </li>
              <li className="text-sm text-gray-600">
                Location: Nairobi, Kenya
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-600 text-center">
            © {new Date().getFullYear()} Corban Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}